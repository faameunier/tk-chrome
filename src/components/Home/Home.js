import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { FixedSizeList as List } from 'react-window';

import { setAllReadBadge } from '../../services/utils';
import SearchBar from 'material-ui-search-bar';

const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond
const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

class Home extends PureComponent {
  constructor(props) {
    super(props);
    setAllReadBadge();
    this.state = { renderSaveBoolean: false };
    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];
      if (changesClosedHistory) {
        this.setState({
          closed_history: changesClosedHistory['newValue'],
          renderSaveBoolean: true,
          searchValue: '',
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get([CLOSED_HISTORY], (result) => {
      const closed_history = result.closed_history || [];
      this.setState({ closed_history });
    });
    this.setState({ nextList: [] });
    chrome.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    setAllReadBadge();
    chrome.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
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
    items.splice(key, 1);
    this.setState({ renderSaveBoolean: true }); // closed_history: items.reverse(),
    chrome.runtime.sendMessage({
      messageType: messageType,
      uuid: restoredTab.uuid,
    });
  }

  searchOnChange = (value) => {
    this.setState({ searchValue: value });
  };

  searchOnRequestSearch = (event) => {};

  searchOnCancel = () => {
    this.setState({ searchValue: '' });
  };

  forceRender() {
    this.setState({ renderSaveBoolean: false });
  }

  filterList(selectedList, endPeriod) {
    const now = Date.now();
    return selectedList.filter((item) => {
      return now - item.deletion_time < endPeriod;
    });
  }
  filterListOnDate(selectedList, beginningDay) {
    const endDay = new Date(beginningDay.getTime());
    endDay.setDate(endDay.getDate() + 1);
    return selectedList.filter((item) => {
      return beginningDay.getTime() < item.deletion_time && item.deletion_time < endDay.getTime();
    });
  }

  generateBeginDate(rollBackDays) {
    const beginningDay = new Date();
    beginningDay.setDate(beginningDay.getDate() - rollBackDays);
    beginningDay.setHours(0, 0, 0, 0);
    const dateDayBegin = String(beginningDay.getDate()).padStart(2, '0');
    const dateMonthBegin = String(beginningDay.getMonth() + 1).padStart(2, '0');
    return [beginningDay, dateDayBegin + '/' + dateMonthBegin];
  }

  renderList() {
    const { classes } = this.props;
    let selectedList = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_72H) : [];
    selectedList = selectedList.map((website) => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        const formatted_deletion_time = deletionTime.toTimeString().split(' ')[0];
        website.hours_deletion = formatted_deletion_time.split(':')[0];
        website.minutes_deletion = formatted_deletion_time.split(':')[1];
        website.truncated_url = website.url;
      }
      return website;
    });

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

    const generatedDateToday = this.generateBeginDate(0);
    const generatedDateYesterday = this.generateBeginDate(1);
    const generatedDate2daysAgo = this.generateBeginDate(2);
    const generatedDate3daysAgo = this.generateBeginDate(3);

    const filteredListToday = this.filterListOnDate(selectedList, generatedDateToday[0]).reverse();
    const filteredListYesterday = this.filterListOnDate(selectedList, generatedDateYesterday[0]).reverse();
    const filteredList2daysAgo = this.filterListOnDate(selectedList, generatedDate2daysAgo[0]).reverse();
    const filteredList3daysAgo = this.filterListOnDate(selectedList, generatedDate3daysAgo[0]).reverse();

    let yesterdayTitle = [];
    let twoDaysTitle = [];
    let threeDaysTitle = [];

    if (filteredListYesterday.length > 0) {
      yesterdayTitle = [{ day: generatedDateYesterday[1], text: 'Yesterday -' }];
    }
    if (filteredList2daysAgo.length > 0) {
      twoDaysTitle = [{ day: generatedDate2daysAgo[1], text: 'Previous day -' }];
    }
    if (filteredList3daysAgo.length > 0) {
      threeDaysTitle = [{ day: generatedDate3daysAgo[1], text: '' }];
    }
    const filteredList = filteredListToday
      .concat(yesterdayTitle)
      .concat(filteredListYesterday)
      .concat(twoDaysTitle)
      .concat(filteredList2daysAgo)
      .concat(threeDaysTitle)
      .concat(filteredList3daysAgo);

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
                {`${website.hours_deletion}:${website.minutes_deletion}`}
              </Typography>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt={website.title}
                  src={website.favIconUrl}
                  className={classes.avatarContainer}
                />
              </ListItemAvatar>
            </div>
            <ListItemText
              primary={website.truncated_url}
              secondary={website.title}
              classes={{
                primary: classes.primaryTextContainer,
                secondary: classes.secondaryTextContainer,
              }}
              className={classes.itemText}
            />
            <ListItemSecondaryAction>
              <div className={classes.buttonContainer}>
                <Button
                  size="small"
                  onClick={this.removeItem.bind(this, myFilteredList, index)}
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                  {'Restore'}
                </Button>
              </div>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      );
    };
    return (
      <div className={classes.listWebsites}>
        <SearchBar
          placeholder="Search on last 72h"
          onChange={this.searchOnChange}
          onRequestSearch={this.searchOnRequestSearch}
          onCancelSearch={this.searchOnCancel}
          value={this.state.searchValue}
          className={classes.searchBar}
        />
        <div className={classes.list}>
          {filteredList.length === 0 ? null : (
            <List height={Math.min(80 * filteredList.length, 300)} itemCount={filteredList.length} itemSize={80}>
              {listItem(filteredList)}
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
        {this.renderList.bind(this)(REMOVED)}
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
