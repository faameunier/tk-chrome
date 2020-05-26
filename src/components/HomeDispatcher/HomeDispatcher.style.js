import { withStyles } from '@material-ui/core/styles';

import HomeDispatcher from './HomeDispatcher';
import Tab from '@material-ui/core/Tab/Tab';
import React from 'react';

const styles = (theme) => ({
  homeContainer: {
    minWidth: 400,
  },
  tab: {
    color: '#00b9aa',
  },
  notification: {
    left: 150,
  },
  gridLogoTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1.25),
  },
  allTabs: {
    maxWidth: '75%',
  },
  ensemblelogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
  },
  logoAvatar: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  logoFull: {
    marginLeft: theme.spacing(2.25),
    width: theme.spacing(12),
  },
  iconContainer: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(1.5),
  },
});
export default withStyles(styles)(HomeDispatcher);
