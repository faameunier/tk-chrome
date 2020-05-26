import React, { PureComponent } from 'react';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { SnackbarProvider } from 'notistack';
import Settings from '../Settings';
import IconButton from '@material-ui/core/IconButton';
import Home from '../Home';
import { logger } from '../../services/utils.js';

class HomeDispatcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { appBarValue: 'HOME' };
  }

  componentDidMount() {
    this.setState({ appBarValue: 'HOME' });
    logger(this, 'Popup opened');
  }

  handleChange = (newValue) => () => {
    this.setState({ appBarValue: newValue });
    logger(this, 'Switch to ' + newValue);
  };

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return <Home />;
      case 'SETTINGS':
        return <Settings />;
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
    return (
      <SnackbarProvider
        maxSnack={2}
        classes={{
          root: classes.notification,
        }}
      >
        <div className={classes.homeContainer}>
          <Paper square>
            <div className={classes.gridLogoTabs}>
              <Link href="https://tabby.us" target="_blank" className={classes.ensemblelogo}>
                {/*<Avatar*/}
                {/*alt="logoTabby"*/}
                {/*src={'../../assets/static/icons/tabby_128.png'}*/}
                {/*className={classes.logoAvatar}*/}
                {/*/>*/}
                <img src={'../../assets/static/icons/tabby_2.png'} className={classes.logoFull} />
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
