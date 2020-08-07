import { withStyles } from '@material-ui/core/styles';

import Welcome from './Welcome';

const styles = (theme) => ({
  titleGroup: {
    display: 'grid',
    placeItems: 'center',
    marginBottom: theme.spacing(4),
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
  button: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    maxWidth: theme.spacing(6),
  },
  buttonContainer: {
    display: 'grid',
    placeItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
export default withStyles(styles)(Welcome);
