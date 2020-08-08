import { withStyles } from '@material-ui/core/styles';

import First from './First';

const styles = (theme) => ({
  titleGroup: {
    display: 'grid',
    placeItems: 'center',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    color: '#404040',
    fontSize: 22,
    fontFamily: 'Helvetica',
  },
  subtitle: {
    fontWeight: 'normal',
    color: '#404040',

    fontSize: 18,
    fontFamily: 'Helvetica',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  videoContainer: {
    display: 'grid',
    placeItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  mobileStepper: {
    maxWidth: 400,
    flexGrow: 1,
  },
  step: {
    '& $completed': {
      color: 'lightgreen',
    },
    '& $active': {
      color: 'pink',
    },
    '& $disabled': {
      color: 'red',
    },
  },
  stepIcon: {
    color: '#00b9aa',
  },
  stepper: {
    backgroundColor: '#E7E7E7',
  },
  stepperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: theme.spacing(0.5),
  },

  button: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    maxWidth: theme.spacing(6),
  },
});
export default withStyles(styles)(First);
