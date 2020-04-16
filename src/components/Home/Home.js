import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const RESTORE = 'RESTORE';
const NEXT = 'NEXT';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const TIME_PERIOD_TO_CONSIDER = 3600000 * 2; // in microsecond

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { renderSaveBoolean: false };
  }

  componentDidMount() {
    this.mounted = true;
    chrome.storage.local.get([CLOSED_HISTORY], (result) => {
      const closed_history = result.closed_history || [];
      this.setState({ closed_history });
    });
    this.setState({ nextList: [] });
    chrome.storage.onChanged.addListener(
      function (changes) {
        const changesClosedHistory = changes[CLOSED_HISTORY];
        if (this.mounted && changesClosedHistory) {
          this.setState({
            closed_history: changesClosedHistory['newValue'],
            renderSaveBoolean: true,
          });
        }
      }.bind(this)
    );
  }

  componentWillUnmount() {
    this.mounted = false;
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
        now -
          Math.max(
            item.statistics.updated_at,
            item.statistics.last_active_timestamp
          ) <
        TIME_PERIOD_TO_CONSIDER
      );
    });
  }

  renderList(listToBeRendered) {
    const { classes } = this.props;

    let selectedList;
    const MAX_LENGTH_TITLE = 50;

    switch (listToBeRendered) {
      case NEXT:
        selectedList = this.state.nextList ? this.state.nextList : [];
        break;
      default:
        selectedList = this.state.closed_history
          ? this.state.closed_history
          : [];
        selectedList = selectedList.map((website, i) => {
          const deletionTime = new Date(website.deletion_time);
          const formatted_deletion_time = deletionTime
            .toTimeString()
            .split(' ')[0];
          website.hours_deletion = formatted_deletion_time.split(':')[0];
          website.minutes_deletion = formatted_deletion_time.split(':')[1];
          if (website.title && website.title.length > MAX_LENGTH_TITLE) {
            website.title = website.title
              .substring(0, MAX_LENGTH_TITLE)
              .concat('...');
          }
          return website;
        });
    }
    const isNext = listToBeRendered === NEXT;
    const filteredList = this.filterList(selectedList).reverse();
    return (
      <div className={classes.listWebsites}>
        <Typography variant="h6" className={classes.greenTitle}>
          {isNext ? 'Next tabs to be closed' : 'Tabs closed today'}
        </Typography>
        <div>
          <List dense={true} className={classes.listItems}>
            {filteredList.length === 0 ? (
              <p>No tabs closed in the last 2 hours.</p>
            ) : (
              filteredList.map((website, i) => (
                <ListItem key={i}>
                  <div className={classes.gridAvatarWithTime}>
                    <Typography className={classes.timeDisplay}>
                      {`${website.hours_deletion}:${website.minutes_deletion}`}
                    </Typography>
                    <ListItemAvatar>
                      <Avatar alt={website.title} src={website.favIconUrl} />
                    </ListItemAvatar>
                  </div>
                  <ListItemText
                    primary={website.url}
                    secondary={website.title}
                    className={classes.itemText}
                  />
                  <ListItemSecondaryAction>
                    <Button
                      size="large"
                      onClick={
                        isNext
                          ? this.removeNextItem.bind(this, i)
                          : this.removeItem.bind(this, i)
                      }
                      variant="outline-primary"
                      className={classes.button}
                    >
                      {isNext ? 'Skip' : 'Restore'}
                    </Button>
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
    const numberClosedTabsLastHour = this.state.closed_history
      ? this.filterList(this.state.closed_history).length
      : 0;
    return (
      <div className="card todo-list-container">
        <div className="card-body">
          <Typography variant="h3" className={classes.title}>
            <Typography className={classes.boldText}>
              {numberClosedTabsLastHour ? numberClosedTabsLastHour : 'No'} tab
              {numberClosedTabsLastHour === 1 ? '' : 's'}
            </Typography>
            <Typography className={classes.middleText}>
              {' '}
              {numberClosedTabsLastHour === 1 ? 'was' : 'were'} closed in the
              last{' '}
            </Typography>
            <Typography className={classes.boldText}> 2 hours! </Typography>
          </Typography>
          {this.renderList.bind(this)(REMOVED)}
          {/*{this.renderList.bind(this)(NEXT)}*/}
        </div>
      </div>
    );
  }
}

export default Home;
