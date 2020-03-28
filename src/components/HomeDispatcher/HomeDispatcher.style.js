import { withStyles } from '@material-ui/core/styles';

import HomeDispatcher from './HomeDispatcher';

const styles = theme => ({
    homeContainer: {
       minWidth: 400,
       minHeight: 300,
     },
});
export default withStyles(styles)(HomeDispatcher);
