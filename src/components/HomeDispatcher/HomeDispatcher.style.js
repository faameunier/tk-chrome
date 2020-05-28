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
    marginTop: theme.spacing(1.25),
  },
  logoFull: {
    marginLeft: theme.spacing(2.25),
    width: theme.spacing(12),
    marginTop: theme.spacing(1.25),
  },
  iconContainer: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1.5),
  },
  success: {
    background: 'linear-gradient(45deg,#80e0a7, #00b9aa)',
  },
});
export default withStyles(styles)(HomeDispatcher);
