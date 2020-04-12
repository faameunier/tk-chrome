import { withStyles } from '@material-ui/core/styles';

import HomeDispatcher from './HomeDispatcher';
import Tab from "@material-ui/core/Tab/Tab";
import React from "react";

const styles = theme => ({
    homeContainer: {
       minWidth: 400,
       //minHeight: 300,
     },
     tab: {
        color: '#1b9e74',
     },
});
export default withStyles(styles)(HomeDispatcher);
