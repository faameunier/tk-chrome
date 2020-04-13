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
        flexDirection: 'row',
        alignItems: 'center',
        //width: '100%',
        justifyContent: 'space-between',
        //height: '100vh',
    },
    secondaryButton: {
        marginTop: 20,
        color: '#1b9e74',
        borderColor: '#1b9e74',
    }
});
export default withStyles(styles)(Settings);
