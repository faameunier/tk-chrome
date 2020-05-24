import { withStyles } from '@material-ui/core/styles';

import Home from './Home';

const styles = (theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40,
  },
  textOnRight: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    //justifyContent: 'space-between',
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    //color: '#1b9e74',
    borderBottom: `2px solid #1b9e74`,
    maxWidth: 225,
  },

  boldNumber: {
    color: '#e55c00',
    fontSize: 40,
    maxWidth: '30%',
  },
  middleText: {
    fontSize: 12,
  },
  button: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 12,
    maxWidth: 20,
  },
  buttonContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' },
  itemText: {
    maxWidth: 185,
    overflowWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: 60,
  },
  timeDisplay: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  gridAvatarWithTime: {
    display: 'flex',
    flexDirection: 'column',
  },
  listWebsites: {
    marginTop: 20,
  },
  listItems: {
    maxHeight: 300,
    overflowY: 'scroll',
  },
  linkToForm: {
    position: 'relative',
    left: '55%',
    fontSize: 10,
    marginTop: 15,
    maxWidth: '75%',
  },
  avatarContainer: {
    maxWidth: theme.spacing(7),
    maxHeight: theme.spacing(7),
  },
  primaryTextContainer: {
    fontSize: 16, //Insert your required size
  },
  secondaryTextContainer: {
    fontSize: 13, //Insert your required size
  },
});
export default withStyles(styles)(Home);
