import browser from 'webextension-polyfill';
import {isEqual} from 'lodash';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip';

import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { copy } from '../../services/utils.js';

import { withSnackbar } from 'notistack';
import { RELAXED, FOCUSED, CUSTOMIZED, INIT_FOCUSED_PROFILE } from '../../config/settingsProfiles.js';
import { checkSettings, OPTIMAL_NUMBER_TABS, POLICY } from '../utils';
import { isInteger, removeItem } from '../../services/utils';
import Link from '@material-ui/core/Link';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: theme.spacing(0.5),
  },
}))(Tooltip);

class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedMode: this.props.active_profile === FOCUSED,
      relaxedMode: this.props.active_profile === RELAXED,
      customizedBool: this.props.active_profile === CUSTOMIZED,
      settings: this.props.settings,
      focusedWindowId: this.props.focused_window_id,
      inactivePolicy: this.props.inactive_policy,
      openModal: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.settings, this.props.settings)) {
      this.setState({ settings: this.props.settings });
    }
    if (prevProps.active_profile !== this.props.active_profile) {
      this.setState({
        focusedMode: this.props.active_profile === FOCUSED,
        relaxedMode: this.props.active_profile === RELAXED,
        customizedBool: this.props.active_profile === CUSTOMIZED,
      });
    }
    if (prevProps.focused_window_id !== this.props.focused_window_id) {
      this.setState({
        customizedBool: this.props.active_profile === CUSTOMIZED,
      });
    }
    if (!isEqual(prevProps.inactive_policy, this.props.inactive_policy)) {
      this.setState({
        inactivePolicy: this.props.inactive_policy,
      });
    }
  }

  handleBoolChange(changeType) {
    browser.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType,
    });
    if (changeType === RELAXED || changeType === FOCUSED) {
      this.notifyUser(true);
    }
    if (this.state.inactivePolicy.includes(this.state.focusedWindowId)) {
      this.handleSwitch();
    }
  }

  handleSaveParameters() {
    // TODO Add function to check for all potential values
    let success = false;
    if (checkSettings(this.state.settings)) {
      browser.runtime.sendMessage({
        messageType: 'SETTINGS_PARAMETERS',
        settings: this.state.settings,
      });
      success = true;
    }
    this.notifyUser(success);
  }

  notifyUser(success) {
    this.props.enqueueSnackbar(success ? 'New Settings are saved.' : 'Settings cannot be saved.', {
      variant: success ? 'success' : 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transitionDuration: 750,
      autoHideDuration: 2000,
    });
  }

  handleChangeParameters(path, parameter) {
    return (event) => {
      let settings = copy(this.state.settings);
      const nextValue = event.target.value;
      if (isInteger(nextValue) || nextValue.length === 0) {
        settings[path][parameter] = nextValue; // do not parseInt or textField goes crazy...
        this.setState({ settings: settings });
      }
    };
  }

  handleSwitch() {
    let inactivePolicy = this.state.inactivePolicy;

    if (inactivePolicy.includes(this.state.focusedWindowId)) {
      inactivePolicy = removeItem(inactivePolicy, this.state.focusedWindowId);
      browser.runtime.sendMessage({
        messageType: 'REMOVE_INACTIVE_POLICY',
        windowId: this.state.focusedWindowId,
      });
    } else {
      inactivePolicy.push(this.state.focusedWindowId);
      browser.runtime.sendMessage({
        messageType: 'ADD_INACTIVE_POLICY',
        windowId: this.state.focusedWindowId,
      });
    }
    this.setState({ inactivePolicy: inactivePolicy });
  }

  handleOpen() {
    this.setState({ openModal: true });
  }

  handleClose() {
    this.setState({ openModal: false });
  }

  render() {
    const { classes } = this.props;
    const inputsParameters = [
      {
        label: 'Optimal tabs number',
        source: this.state.settings,
        path: POLICY,
        parameter: OPTIMAL_NUMBER_TABS,
        inputProps: { min: '1', max: '100', step: '1' },
      },
    ];
    const listItemsParameters = inputsParameters.map((item, index) => (
      <TextField
        key={index}
        disabled={!this.state.customizedBool}
        label={item.label}
        onChange={this.handleChangeParameters(item.path, item.parameter).bind(this)}
        value={item.source[item.path][item.parameter]}
        className={classes.textField}
        type="number"
        onKeyUp={(event) => {
          if (event.key == 'Enter') this.handleSaveParameters();
        }}
        inputProps={item.inputProps}
      />
    ));
    return (
      <div className={classes.mainBlock}>
        <div className="card-body">
          <FormControlLabel
            control={
              <Switch
                checked={
                  this.state.focusedWindowId && this.state.inactivePolicy
                    ? !this.state.inactivePolicy.includes(this.state.focusedWindowId)
                    : true
                }
                onChange={this.handleSwitch.bind(this)}
                color="secondary"
                className={classes.switchWrapper}
              />
            }
            className={classes.switchContainer}
            label={<Typography className={classes.styleLabel}>Enable on this window</Typography>}
          />
          <div className={classes.introductionBlock}>
            <TuneIcon />
            <Typography className={classes.parametersTitle}>Select your profile</Typography>
          </div>

          <FormGroup className={classes.settingsWrapper}>
            <LightTooltip title={'tabby tends to keep 5 tabs'} placement="left">
              <div className={classes.firstProfilesContainer}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.focusedMode}
                      onChange={this.handleBoolChange.bind(this, FOCUSED)}
                      color="secondary"
                      className={classes.checkboxWrapper}
                    />
                  }
                  label={<Typography className={classes.styleLabel}>Focus</Typography>}
                  className={classes.firstBooleans}
                />
                <HelpOutlineIcon className={classes.helpIcon} />
              </div>
            </LightTooltip>
            <LightTooltip title={'tabby tends to keep 12 tabs'} placement="left">
              <div className={classes.firstProfilesContainer}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.relaxedMode}
                      onChange={this.handleBoolChange.bind(this, RELAXED)}
                      color="secondary"
                      className={classes.checkboxWrapper}
                    />
                  }
                  label={<Typography className={classes.styleLabel}>Relax</Typography>}
                  className={classes.firstBooleans}
                />
                <HelpOutlineIcon className={classes.helpIcon} />
              </div>
            </LightTooltip>

            <div className={classes.customizeWrapper}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.customizedBool}
                    onChange={this.handleBoolChange.bind(this, CUSTOMIZED)}
                    color="secondary"
                    className={classes.checkboxWrapper}
                  />
                }
                label={<Typography className={classes.styleLabel}>Customize</Typography>}
                className={classes.firstBooleans}
              />
            </div>
            <div className={classes.settingsBlock}>
              <FormControl required fullWidth>
                {listItemsParameters}
              </FormControl>
              <TextField hidden key="hidden-textfield" disabled />
              <div>
                <Button
                  size="small"
                  color="secondary"
                  disabled={!this.state.customizedBool}
                  className={classes.secondaryButton}
                  variant="outlined"
                  onClick={this.handleSaveParameters.bind(this)}
                >
                  Save
                </Button>
              </div>
            </div>
          </FormGroup>
        </div>
        <Button variant="text" onClick={this.handleOpen.bind(this)} className={classes.tipsButton}>
          <Typography className={classes.styleLabelTips}>Help</Typography>{' '}
        </Button>
        <Modal
          //disablePortal={true}
          className={classes.modal}
          open={this.state.openModal}
          onClose={this.handleClose.bind(this)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 750,
            invisible: true,
          }}
        >
          <Fade in={this.state.openModal}>
            <Box borderRadius={6} className={classes.paper}>
              <div className={classes.firstBlockModal}>
                <div className={classes.secondEnsemble}>
                  <Typography className={classes.styleLabel}>Protect a tab</Typography>
                  <div className={classes.lastEnsemble}>
                    <img src={'../../assets/static/icons/right_click.png'} className={classes.leftClickWrapper} />

                    <Typography className={classes.styleLabel}>+</Typography>
                    <Typography className={classes.styleLabel}>Pin</Typography>
                  </div>
                </div>
                <div className={classes.secondEnsemble}>
                  <Typography className={classes.styleLabel}>Reopen multiple tabs</Typography>

                  <div className={classes.secondEnsemble}>
                    <Typography className={classes.styleLabel}>Ctrl</Typography>

                    <Typography className={classes.styleLabel}>+</Typography>
                    <img src={'../../assets/static/icons/left_click.png'} className={classes.leftClickWrapper} />
                  </div>
                </div>
              </div>
              <Typography className={classes.styleLabel}>How does tabby work?</Typography>{' '}
              <Typography className={classes.styleLabelNext}>
                tabby will not remove tabs right after their creation.{' '}
              </Typography>{' '}
              <Typography className={classes.styleLabelNext}>
                tabby takes well-thought-out decisions automatically.
              </Typography>{' '}
              <div className={classes.footerModal}>
                <Link href="https://tabby.us/faq" target="_blank">
                  <Typography className={classes.styleLabelTips}>FAQ available here</Typography>{' '}
                </Link>
                <Typography className={classes.styleLabelTips}>
                  tabby {browser.runtime.getManifest().version}
                </Typography>{' '}
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withSnackbar(Settings);
