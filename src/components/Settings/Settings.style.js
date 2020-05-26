import { withStyles } from '@material-ui/core/styles';

import Settings from './Settings';

const styles = (theme) => ({
  settingsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 47,
    marginRight: 20,
  },
  secondaryButton: {
    marginTop: 18,
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 12,
    maxWidth: 20,
  },

  notification: {
    maxWidth: 150,
  },
  introductionBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginLeft: 7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 16,
  },
  settingsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginTop: 4,
  },
  firstBooleans: {
    maxWidth: '36%',
    maxHeight: 20,
    marginTop: 5,
    pointerEvents: 'none',
  },
  checkboxWrapper: {
    pointerEvents: 'auto',
  },
  switchContainer: {
    maxHeight: 20,
    marginBottom: 20,
  },
  textField: {
    maxWidth: '85%',
  },
  customizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
  },
  helpIcon: {
    color: '#e55c00',
    fontSize: 14,
    marginBottom: 8,
  },
});
export default withStyles(styles)(Settings);
