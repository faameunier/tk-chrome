import { withStyles } from '@material-ui/core/styles';

import Home from './Home';

const styles = (theme) => ({
  title: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    color: '#1b9e74',
    borderBottom: `2px solid #1b9e74`,
    maxWidth: 225,
  },
  boldText: {
    fontWeight: 'bold',
  },
  middleText: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  button: {
    color: '#1b9e74',
    borderColor: '#1b9e74',
    fontSize: 12,
  },
  itemText: {
    maxWidth: 185,
    wordWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: 80,
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
});
export default withStyles(styles)(Home);
