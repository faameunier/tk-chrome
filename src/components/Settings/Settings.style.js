import { withStyles } from '@material-ui/core/styles';

import Settings from './Settings';

const styles = theme => ({

    textField: {
         marginTop: 0,
         marginLeft: 20,
         marginRight: 20,
    },
    activeBar:{
        marginTop:10,
    },

    qualityWrapper: {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
        //width: '100%',
        //height: '100vh',
    },
    secondaryButton: {
        marginTop: 20,
        marginDown: 20,
        color: '#1b9e74',
        borderColor: '#1b9e74',
    },
    notification: {
        maxWidth: 150,
    },
    introductionBlock : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },

});
export default withStyles(styles)(Settings);
