import React, { PureComponent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Settings from '../Settings';
import Home from '../Home';
import { SnackbarProvider } from 'notistack';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';

class HomeDispatcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { appBarValue: 'HOME' };
  }

  componentDidMount() {
    this.setState({ appBarValue: 'HOME' });
  }

  handleChange(event, newValue) {
    this.setState({ appBarValue: newValue });
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
              <Avatar alt="logoTabby" src={'../../assets/static/icons/tabby.png'} className={classes.logoAvatar} />
              <Tabs
                value={this.state.appBarValue ? this.state.appBarValue : 'HOME'}
                onChange={(e, v) => this.handleChange(e, v)}
                className={classes.allTabs}
              >
                <Tab label="Home" value={'HOME'} className={classes.tab} />
                <Tab label="Settings" value={'SETTINGS'} className={classes.tab} />
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
