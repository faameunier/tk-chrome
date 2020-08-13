import { withStyles } from '@material-ui/core/styles';
import OnboardingDispatcher from './OnboardingDispatcher';
import React from 'react';

const styles = (theme) => ({
  homeContainer: {
    width: '100%',
    height: '100%',
    //background: 'linear-gradient(45deg,#80e0a7, #00b9aa)',
    position: 'absolute',
  },
  paperWelcome: {
    backgroundColor: '#E7E7E7',
    minWidth: '30%',
    minHeight: '35%',
    position: 'absolute',
    opacity: '1 !important',
    // background: 'linear-gradient(40deg,#E7E7E7 80%, #8F8F8F 100%)',
  },
  paperDefault: {
    backgroundColor: '#E7E7E7',
    minWidth: '65%',
    minHeight: '80%',
    position: 'absolute',
    opacity: '1 !important',
  },
  modal: {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(150, 150, 150, 0)',
    zIndex: theme.zIndex.drawer + 1,
  },
});
export default withStyles(styles)(OnboardingDispatcher);
