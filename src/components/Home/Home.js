import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { setAllReadBadge } from '../../services/utils';

const RESTORE = 'RESTORE';
const NEXT = 'NEXT';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS = 24;
const TIME_PERIOD_TO_CONSIDER = 3600000 * NUMBER_HOURS; // in microsecond

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

  removeItem(key) {
    let items = this.state.closed_history.reverse();
    this.restoreTab(items, key, RESTORE);
  }

  removeNextItem(key) {
    let items = this.state.nextList;
    this.restoreTab(items, key, RESTORE);
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
    chrome.runtime.sendMessage({
      messageType: messageType,
      tabId: restoredTab.tabId,
    });
  }

  forceRender() {
    this.setState({ renderSaveBoolean: false });
  }

  filterList(selectedList) {
    const now = Date.now();
    return selectedList.filter((item) => {
      return (
        now - Math.max(item.statistics.updated_at, item.statistics.last_active_timestamp) < TIME_PERIOD_TO_CONSIDER
      );
    });
  }

  renderList(listToBeRendered) {
    const { classes } = this.props;

    let selectedList;
    const MAX_LENGTH_TITLE = 100;

    switch (listToBeRendered) {
      case NEXT:
        selectedList = this.state.nextList ? this.state.nextList : [];
        break;
      default:
        selectedList = this.state.closed_history ? this.state.closed_history : [];
        selectedList = selectedList.map((website, i) => {
          const deletionTime = new Date(website.deletion_time);
          const formatted_deletion_time = deletionTime.toTimeString().split(' ')[0];
          website.hours_deletion = formatted_deletion_time.split(':')[0];
          website.minutes_deletion = formatted_deletion_time.split(':')[1];
          if (website.title && website.title.length > MAX_LENGTH_TITLE) {
            website.title = website.title.substring(0, MAX_LENGTH_TITLE).concat('...');
          }
          if (website.title && website.title.length > MAX_LENGTH_TITLE) {
            website.truncated_url = website.url.split('/')[0];
          } else {
            website.truncated_url = website.url;
          }
          return website;
        });
    }
    const isNext = listToBeRendered === NEXT;
    const filteredList = this.filterList(selectedList).reverse();
    return (
      <div className={classes.listWebsites}>
        <Typography variant="h6" className={classes.greenTitle}>
          {isNext ? 'Next tabs to be closed' : `Last closed tabs`}
        </Typography>
        <div className={classes.listItems}>
          <List dense={true}>
            {filteredList.length === 0 ? (
              <p>{`Maybe you should update your settings.`}</p>
            ) : (
              filteredList.map((website, i) => (
                <ListItem key={i}>
                  <div className={classes.gridAvatarWithTime}>
                    <Typography className={classes.timeDisplay}>
                      {`${website.hours_deletion}:${website.minutes_deletion}`}
                    </Typography>
                    <ListItemAvatar>
                      <Avatar alt={website.title} src={website.favIconUrl} className={classes.avatarContainer} />
                    </ListItemAvatar>
                  </div>
                  <ListItemText
                    primary={website.truncated_url}
                    secondary={website.title}
                    classes={{ primary: classes.primaryTextContainer, secondary: classes.secondaryTextContainer }}
                    className={classes.itemText}
                  />
                  <ListItemSecondaryAction>
                    <div className={classes.buttonContainer}>
                      <Button
                        size="small"
                        onClick={isNext ? this.removeNextItem.bind(this, i) : this.removeItem.bind(this, i)}
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                      >
                        {isNext ? 'Skip' : 'Restore'}
                      </Button>
                    </div>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            )}
          </List>
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history).length : 0;
    return (
      <div className="card-body">
        <Typography variant="h3" className={classes.title}>
          <Typography className={classes.boldNumber}>
            {numberClosedTabsLastHour ? numberClosedTabsLastHour : 0}
          </Typography>
          <Typography className={classes.textOnRight}>
            <Typography className={classes.boldText}>
              {' '}
              tab
              {numberClosedTabsLastHour <= 1 ? '' : 's'} closed
            </Typography>
            <Typography className={classes.middleText}> in the last {`${NUMBER_HOURS} hours`} </Typography>
          </Typography>
        </Typography>
        {this.renderList.bind(this)(REMOVED)}
        {/*{this.renderList.bind(this)(NEXT)}*/}
        <div className={classes.linkToForm}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform"
            target="_blank"
          >
            Report a bug or send us a feedback?
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
