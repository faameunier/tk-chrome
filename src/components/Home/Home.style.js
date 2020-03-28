import { withStyles } from '@material-ui/core/styles';

import Home from './Home';

const styles = theme => ({
    title: {
        fontSize: 16,
  },
});
export default withStyles(styles)(Home);
