import { withStyles } from '@material-ui/core/styles';

import Settings from './Settings';

const styles = (theme) => ({
  settingsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 47,
    marginRight: 20,
  },
  secondaryButton: {
    marginTop: 18,
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 12,
    fontFamily: 'Helvetica',

    maxWidth: 20,
  },

  notification: {
    maxWidth: 150,
  },
  introductionBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginLeft: 7,
  },
  parametersTitle: {
    //fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Helvetica',
    marginLeft: 16,
  },
  settingsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginTop: 4,
  },
  firstBooleans: {
    maxWidth: '36%',
    minWidth: theme.spacing(8),
    maxHeight: 20,
    marginTop: 5,
    // pointerEvents: 'none',
  },
  firstProfilesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    maxWidth: theme.spacing(10),
  },

  styleLabel: {
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  checkboxWrapper: {
    pointerEvents: 'auto',
  },
  switchContainer: {
    maxHeight: 20,
    marginBottom: 20,
    pointerEvents: 'none',
  },
  switchWrapper: {
    pointerEvents: 'auto',
  },
  textField: {
    maxWidth: '85%',
  },
  customizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
  },
  helpIcon: {
    color: '#e55c00',
    fontSize: 13,
    marginTop: theme.spacing(0.25),
    marginLeft: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: 'rgba(150, 150, 150, 0.4)',
    zIndex: theme.zIndex.drawer + 1,
  },
  mainBlock: {
    overflow: 'hidden',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    //border: '0.5px solid #5A5A5A',
    padding: theme.spacing(2, 4, 3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),

    opacity: '1 !important',
  },
  boxCtrl: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #5A5A5A',
    height: theme.spacing(2.5),
    //padding: theme.spacing(2, 4, 3),
    //marginLeft: theme.spacing(3),
    //marginRight: theme.spacing(3),

    opacity: '1 !important',
  },
  leftClickWrapper: {
    height: theme.spacing(3),
  },
  secondEnsemble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '30%',
  },
  lastEnsemble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '27.5%',
  },
  firstBlockModal: {
    marginBottom: theme.spacing(2),
  },
  tipsButton: {
    textTransform: 'capitalize',
    marginTop: theme.spacing(0),
    borderRadius: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing(1),
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
  styleLabelTips: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: 'rgba(150, 150, 150, 1)',
  },
  styleLabelNext: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
  },
  footerModal: {
    marginTop: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // minWidth: '100%',
  },
});
export default withStyles(styles)(Settings);
