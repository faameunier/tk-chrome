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
    justifyContent: 'left',
  },
  allTabs: {
    maxWidth: '75%',
  },
  logoAvatar: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: theme.spacing(7.5),
    height: theme.spacing(7.5),
  },
});
export default withStyles(styles)(HomeDispatcher);
