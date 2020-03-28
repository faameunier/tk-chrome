import { withStyles } from '@material-ui/core/styles';

import Settings from './Settings';

const styles = theme => ({
  // content: {
  //   margin: theme.spacing.unit * 5,
  // },
   textField: {
     marginTop: 0,
     marginLeft: 20,
     marginRight: 20,
   },
    // todoListContainer: {
    //   minWidth: 400,
    // },
    //
    // cardHeader: {
    //     marginTop: '5%',
    //     backgroundColor: "#FFFFFF" ,
    //     minWidth: '75%'
    // },
    //
    // cardTitle: {
    //     backgroundColor: "#FFFFFF",
    //     fontSize: 18,
    //     marginBottom: '%',
    //     lineHeight: 1,
    //     borderBottomColor: "#1b9e74",
    //     borderBottomWidth: 2,
    //     minWidth: "75%",
    // },
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
  // honeypotWrapper: {
  //   marginTop: theme.spacing.unit * 8,
  // },
});
export default withStyles(styles)(Settings);
