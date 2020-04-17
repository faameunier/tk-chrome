import { withStyles } from '@material-ui/core/styles';

import Settings from './Settings';

const styles = (theme) => ({
  textField: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  activeBar: {
    marginTop: 10,
  },

  settingsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxHeight: '50%',
    //width: '100%',
    //height: '100vh',
  },
  secondaryButton: {
    marginTop: 10,
    //marginDown: 5,
    color: '#1b9e74',
    borderColor: '#1b9e74',
  },
  notification: {
    maxWidth: 150,
  },
  introductionBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    //marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
  },
  settingsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstBooleans: {
    maxWidth: '40%',
  },
});
export default withStyles(styles)(Settings);
