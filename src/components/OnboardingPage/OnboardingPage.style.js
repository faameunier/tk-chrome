import { withStyles } from '@material-ui/core/styles';

import OnboardingPage from './OnboardingPage';

const styles = (theme) => ({
  titleGroup: {
    display: 'grid',
    placeItems: 'center',
    marginBottom: theme.spacing(2),
    maxHeight: '30%',
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
    width: '100%',
    height: '56.25%',
  },
  video: {
    width: '70%',
    height: '100%',
  },

  stepIcon: {
    color: '#00b9aa',
  },
  stepper: {
    paddingTop: 0,
    backgroundColor: '#E7E7E7',
    maxHeight: '10%',
    maxWidth: '70%',
  },
  stepperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxHeight: '15%',
  },
  iconContainer: {
  },

  button: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    maxWidth: theme.spacing(6),
  },
});
export default withStyles(styles)(OnboardingPage);
