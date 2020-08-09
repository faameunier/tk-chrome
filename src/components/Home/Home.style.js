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
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: `2px solid #00b9aa`,
    maxWidth: 225,
  },
  listTitle: {
    fontSize: 16,
    maxHeight: 30,
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
    whiteSpace: 'break-spaces',

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
    justifyContent: 'space-between',
    marginTop: theme.spacing(1.25),
    minWidth: '100%',
  },
  footerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  linkToForm: {
    fontSize: 10,
  },
  iconContainer: {
    marginRight: theme.spacing(0.25),
    fontSize: theme.spacing(2),
  },
  avatarContainer: {
    maxWidth: theme.spacing(7),
    maxHeight: theme.spacing(7),
  },
  primaryTextContainer: {
    fontSize: 16,
    overflowWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxHeight: 22,
  },
  secondaryTextContainer: {
    fontSize: 13,
  },
  primaryTitleContainer: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  listTitleText: {
    marginTop: theme.spacing(4.5),
  },
  listContainer: {
    marginTop: theme.spacing(1),
  },
  searchBar: {
    marginBottom: theme.spacing(1),
    maxHeight: theme.spacing(5),
  },
});
export default withStyles(styles)(Home);
