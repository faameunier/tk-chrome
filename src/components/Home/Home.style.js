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
    borderBottom: `2px solid #00b9aa`,
    maxWidth: 225,
  },

  boldNumber: {
    color: '#e55c00',
    fontSize: 40,
    maxWidth: '30%',
  },
  middleText: {
    fontSize: 13,
  },
  topText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 13,
    marginTop: 10,
  },
  button: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 13,
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
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15,
    minWidth: '100%',
  },
  linkToForm: {
    fontSize: 10,
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
