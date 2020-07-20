import * as browser from 'webextension-polyfill';
import _ from 'lodash';
import { FRONTEND_SKELETON_DISPLAY } from '../../config/env.js';
import { NO_RESTORE_URL } from '../../config/websites.js';
import { logger, timeout, setAllReadBadge } from '../../services/utils.js';
import * as dayjs from 'dayjs';
import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { FixedSizeList as List } from 'react-window';
import SearchBar from 'material-ui-search-bar';

const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond
const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond
const FULL_SKELETON = false;

class Home extends PureComponent {
  constructor(props) {
    super(props);
    setAllReadBadge();

    if (props.skeleton) {
      this.state = { closed_history: [], loading: true };
      timeout(FRONTEND_SKELETON_DISPLAY).then(() => {
        logger(this, 'Displaying list');
        this.setState({ loading: false });
      });
    } else {
      this.state = { closed_history: [], loading: false };
    }

    browser.storage.local.get([CLOSED_HISTORY]).then((result) => {
      const closed_history = result.closed_history || [];
      this.setState({ closed_history: this.enrichHistory(closed_history) });
    });
    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];
      if (changesClosedHistory) {
        this.setState({
          closed_history: this.enrichHistory(changesClosedHistory['newValue']),
          searchValue: '',
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    browser.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    setAllReadBadge();
    browser.storage.onChanged.removeListener(this.onChangedCallback);
  }

  removeItem(listItems, key, e) {
    if (e.ctrlKey || e.metaKey) {
      // metaKey is cmd key on mac
      this.restoreTab(listItems, key, SHELL_RESTORE);
    } else {
      this.restoreTab(listItems, key, RESTORE);
    }
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
    logger(this, messageType + ' for tab ' + restoredTab.uuid);
    const closed_history = this.state.closed_history.filter((item) => item.uuid !== restoredTab.uuid);
    this.setState({ closed_history: closed_history }); // no need to enrich here
    browser.runtime.sendMessage({
      messageType: messageType,
      uuid: restoredTab.uuid,
    });
  }

  searchOnChange(value) {
    this.setState({ searchValue: value });
  }

  searchOnRequestSearch(event) {}

  searchOnCancel() {
    this.setState({ searchValue: '' });
  }

  filterList(selectedList, endPeriod) {
    const now = Date.now();
    return selectedList.filter((item) => {
      return now - item.deletion_time < endPeriod;
    });
  }

  enrichHistory(history) {
    // keep elements only in time-frame
    let selectedList = history ? this.filterList(history, TIME_PERIOD_72H) : [];
    const rx = new RegExp(NO_RESTORE_URL.join('|'));
    // list enrichment
    selectedList = selectedList.map((website) => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.hours_minutes_format = dayjs(deletionTime).format('HH:mm');
        website.date = dayjs(deletionTime).startOf('date');
        website.no_restore = rx.exec(website.url) ? true : false;
      }
      return website;
    });

    selectedList = selectedList.reverse();
    return selectedList;
  }

  renderList() {
    const { classes } = this.props;

    let selectedList = this.state.closed_history.slice(0);
    // keeping only websites that match search criteria
    if (typeof this.state.searchValue !== 'undefined' && this.state.searchValue.length > 0) {
      const searchPattern = new RegExp(
        this.state.searchValue
          .split(' ')
          .map((term) => `(?=.*${term})`)
          .join(''),
        'i'
      );
      selectedList = selectedList.filter(
        (option) => option.title.match(searchPattern) || option.url.match(searchPattern)
      );
    }

    let current = dayjs().startOf('date');
    let last = 0;
    for (let i = 0; i < selectedList.length; i++) {
      let next = selectedList[i].date;
      let delta = Math.max(0, Math.ceil(current.diff(next, 'days', true)));
      if (delta > last) {
        if (delta === 1) {
          selectedList.splice(i, 0, { text: 'Yesterday - ', day: next.format('MMM DD') });
        } else if (delta === 2) {
          selectedList.splice(i, 0, { text: 'Previous day - ', day: next.format('MMM DD') });
        } else {
          selectedList.splice(i, 0, { text: '', day: next.format('MMM DD') });
        }
        last = delta;
      }
    }

    const listItem = (myFilteredList) => ({ index, style }) => {
      const website = myFilteredList[index];
      if (typeof website.day !== 'undefined') {
        return (
          <div key={index} style={style}>
            <ListItem ContainerComponent="div">
              <ListItemText
                primary={`${website.text} ${website.day}`}
                classes={{
                  primary: classes.primaryTitleContainer,
                }}
                className={classes.listTitleText}
              />
            </ListItem>
          </div>
        );
      }
      return (
        <div key={index} style={style}>
          <ListItem ContainerComponent="div">
            <div className={classes.gridAvatarWithTime}>
              <Typography className={classes.timeDisplay}>
                {this.state.loading && FULL_SKELETON ? <Skeleton width="3em" /> : `${website.hours_minutes_format}`}
              </Typography>
              <ListItemAvatar>
                {this.state.loading ? (
                  <Skeleton variant="circle">
                    <Avatar />
                  </Skeleton>
                ) : (
                  <Avatar
                    variant="square"
                    alt={website.title ? website.title : website.url}
                    src={website.favIconUrl ? website.favIconUrl : 'error'}
                    className={classes.avatarContainer}
                  />
                )}
              </ListItemAvatar>
            </div>
            {this.state.loading && FULL_SKELETON ? (
              <div>
                <Skeleton width="15em" />
                <Skeleton width="10em" />
              </div>
            ) : (
              <ListItemText
                primary={website.url}
                secondary={website.title}
                classes={{
                  primary: classes.primaryTextContainer,
                  secondary: classes.secondaryTextContainer,
                }}
                className={classes.itemText}
              />
            )}
            {this.state.loading && FULL_SKELETON ? null : (
              <ListItemSecondaryAction>
                <div className={classes.buttonContainer}>
                  <Button
                    size="small"
                    onClick={this.removeItem.bind(this, myFilteredList, index)}
                    variant="outlined"
                    color="secondary"
                    disabled={website.no_restore}
                    className={classes.button}
                  >
                    {'Restore'}
                  </Button>
                </div>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        </div>
      );
    };
    return (
      <div className={classes.listWebsites}>
        <SearchBar
          placeholder="Search on last 72h"
          onChange={this.searchOnChange.bind(this)}
          onRequestSearch={this.searchOnRequestSearch.bind(this)}
          onCancelSearch={this.searchOnCancel.bind(this)}
          value={this.state.searchValue}
          className={classes.searchBar}
        />
        <div className={classes.list}>
          {selectedList.length === 0 ? null : (
            <List height={Math.min(80 * selectedList.length, 300)} itemCount={selectedList.length} itemSize={80}>
              {listItem(selectedList)}
            </List>
          )}
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history
      ? this.filterList(this.state.closed_history, TIME_PERIOD_24H).length
      : 0;
    return (
      <div className="card-body">
        <div variant="h3" className={classes.title}>
          <Typography className={classes.boldNumber}>
            {numberClosedTabsLastHour ? numberClosedTabsLastHour : 0}
          </Typography>
          <div className={classes.textOnRight}>
            <Typography className={classes.topText}>
              {' '}
              tab
              {numberClosedTabsLastHour <= 1 ? '' : 's'} closed
            </Typography>
            <Typography className={classes.middleText}> in the last {`${NUMBER_HOURS_DAY} hours`} </Typography>
          </div>
        </div>
        {this.renderList.bind(this)()}
        <div className={classes.footerContainer}>
          <ErrorOutlineIcon color="secondary" className={classes.iconContainer} />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform"
            target="_blank"
            className={classes.linkToForm}
          >
            Bug/Feedback?
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
