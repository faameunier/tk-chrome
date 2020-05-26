import React, { PureComponent } from 'react';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Settings from '../Settings';
import Home from '../Home';
import { SnackbarProvider } from 'notistack';
import Avatar from '@material-ui/core/Avatar/Avatar';
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

  handleChange(event, newValue) {
    this.setState({ appBarValue: newValue });
    logger(this, 'Switch to ' + newValue);
  }

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
              <Link href="https://tabby.us" target="_blank">
                <Avatar alt="logoTabby" src={'../../assets/static/icons/tabby.png'} className={classes.logoAvatar} />
              </Link>
              <Tabs
                value={this.state.appBarValue ? this.state.appBarValue : 'HOME'}
                onChange={(e, v) => this.handleChange(e, v)}
                className={classes.allTabs}
              >
                <Tab
                  label="Home"
                  value={'HOME'}
                  style={{
                    fontSize: this.state.appBarValue == 'HOME' ? 19 : 16,
                    color: '#1b9e74',
                    textTransform: 'capitalize',
                  }}
                />
                <Tab
                  label="Settings"
                  value={'SETTINGS'}
                  style={{
                    fontSize: this.state.appBarValue == 'SETTINGS' ? 19 : 16,
                    color: '#1b9e74',
                    textTransform: 'capitalize',
                  }}
                />
                {/*<Tab label="Debug" value={"DEBUG"} disabled className={classes.tab}/>*/}
              </Tabs>
            </div>
            <div>{this.dispatchPage()}</div>
          </Paper>
        </div>
      </SnackbarProvider>
    );
  }
}

export default HomeDispatcher;
