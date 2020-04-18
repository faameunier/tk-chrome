import { withStyles } from '@material-ui/core/styles';

import HomeDispatcher from './HomeDispatcher';
import Tab from '@material-ui/core/Tab/Tab';
import React from 'react';

const styles = (theme) => ({
  homeContainer: {
    minWidth: 400,
  },
  tab: {
    color: '#1b9e74',
  },
  notification: {
    left: 150,
  },
  gridLogoTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  allTabs: {
    maxWidth: '75%',
  },
  logoAvatar: {
    border: `2px solid #1b9e74`,
  },
});
export default withStyles(styles)(HomeDispatcher);
