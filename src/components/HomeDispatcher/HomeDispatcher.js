import browser from 'webextension-polyfill';
import React, { PureComponent } from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { SnackbarProvider } from 'notistack';
import Settings from '../Settings';
import IconButton from '@material-ui/core/IconButton';
import Home from '../Home';
import { FOCUSED, INIT_FOCUSED_PROFILE } from '../../config/settingsProfiles.js';
import { logger } from '../../services/utils.js';

class HomeDispatcher extends PureComponent {
  constructor(props) {
    super(props);
    browser.storage.local
      .get(['closed_history', 'active_profile', 'settings', 'focused_window_id', 'inactive_policy'])
      .then((result) => {
        const closed_history = result.closed_history || [];
        const active_profile = result.active_profile || FOCUSED;
        const settings = result.settings || INIT_FOCUSED_PROFILE;
        const focused_window_id = result.focused_window_id || null;
        const inactive_policy = result.inactive_policy || [];
        this.setState({
          active_profile,
          settings,
          focused_window_id,
          inactive_policy,
          closed_history: closed_history,
        });
      });
    this.state = {
      appBarValue: 'HOME',
      firstLoad: true,
      closed_history: [],
      active_profile: FOCUSED,
      settings: INIT_FOCUSED_PROFILE,
      focused_window_id: null,
      inactive_policy: [],
    };
    this.onChangedCallback = function (changes) {
      const keys = ['closed_history', 'active_profile', 'settings', 'focused_window_id', 'inactive_policy'];
      keys.forEach((key) => {
        if (changes[key]) {
          this.setState({
            [key]: changes[key]['newValue'],
          });
        }
      });
    }.bind(this);
  }

  componentDidMount() {
    logger(this, 'Popup opened');
    browser.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    browser.storage.onChanged.removeListener(this.onChangedCallback);
  }

  handleChange = (newValue) => () => {
    this.setState({ appBarValue: newValue, firstLoad: false });
    logger(this, 'Switch to ' + newValue);
  };

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return <Home skeleton={this.state.firstLoad} closed_history={this.state.closed_history} />;
      case 'SETTINGS':
        return (
          <Settings
            active_profile={this.state.active_profile}
            settings={this.state.settings}
            focused_window_id={this.state.focused_window_id}
            inactive_policy={this.state.inactive_policy}
          />
        );
      default:
        return <div>This is an error page</div>;
    }
  }

  displayIcon() {
    const { classes } = this.props;
    switch (this.state.appBarValue) {
      case 'HOME':
        return (
          <IconButton
            color="secondary"
            component="div"
            onClick={this.handleChange('SETTINGS')}
            className={classes.iconContainer}
          >
            <SettingsIcon />
          </IconButton>
        );
      case 'SETTINGS':
        return (
          <IconButton
            color="secondary"
            component="div"
            onClick={this.handleChange('HOME')}
            className={classes.iconContainer}
          >
            <ArrowBackIosIcon />
          </IconButton>
        );
      default:
        return <div>This is an error page</div>;
    }
  }

  render() {
    const { classes } = this.props;
    let beta = ENV !== 'prod' ? <span className={classes.beta}>beta</span> : null;
    return (
      <SnackbarProvider
        maxSnack={2}
        classes={{
          root: classes.notification,
          variantSuccess: classes.success,
        }}
      >
        <div className={classes.homeContainer}>
          <Paper square={false} variant="outlined" className={classes.paperShadow}>
            <div className={classes.gridLogoTabs}>
              <Link href="https://tabby.us" target="_blank" className={classes.ensemblelogo} style={{ textDecoration: 'none' }}>
                <img src={'../../assets/static/icons/tabby_2.png'} className={classes.logoFull} />
                {beta}
              </Link>
              {this.displayIcon()}
            </div>
            <div>{this.dispatchPage()}</div>
          </Paper>
        </div>
      </SnackbarProvider>
    );
  }
}

export default HomeDispatcher;
