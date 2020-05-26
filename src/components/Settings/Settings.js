import React, { PureComponent } from 'react';
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
import { withSnackbar } from 'notistack';
import {
  RELAXED,
  FOCUSED,
  CUSTOMIZED,
  INIT_FOCUSED_PROFILE,
  INIT_RELAXED_PROFILE,
} from '../../config/settingsProfiles.js';
import { checkSettings, OPTIMAL_NUMBER_TABS, POLICY, INACTIVE_POLICY, removeItem } from '../utils';
import { isInteger } from '../../services/utils';
import Link from '@material-ui/core/Link/Link';

class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: INIT_RELAXED_PROFILE,
      renderSaveBoolean: false,
      focusedWindowId: true,
    };
    this.onChangedCallback = function (changes) {
      const changesSettings = changes['settings'];
      const changesProfile = changes['active_profile'];
      if (changesSettings) {
        this.setState({
          settings: changesSettings['newValue'],
          renderSaveBoolean: true,
        });
      }
      if (changesProfile) {
        this.setState({
          focusedMode: changesProfile['newValue'] === FOCUSED,
          relaxedMode: changesProfile['newValue'] === RELAXED,
          customizedBool: changesProfile['newValue'] === CUSTOMIZED,
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get(['active_profile', 'settings', 'focused_window_id'], (result) => {
      const profile = result.active_profile || RELAXED;
      const focusedMode = profile === FOCUSED;
      const relaxedMode = profile === RELAXED;
      const customizedBool = profile === CUSTOMIZED;
      const settings = result.settings || INIT_RELAXED_PROFILE;
      const focusedWindowId = result.focused_window_id;
      this.setState({
        focusedMode,
        relaxedMode,
        customizedBool,
        settings,
        focusedWindowId,
      });
    });
    chrome.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    chrome.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  handleBoolChange(changeType) {
    chrome.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType,
    });
    if (changeType === RELAXED || changeType === FOCUSED) {
      this.notifyUser(true);
    }
  }

  forceRender() {
    this.setState({ renderSaveBoolean: false });
  }

  handleSaveParameters() {
    // TODO Add function to check for all potential values
    let success = false;
    if (checkSettings(this.state.settings)) {
      chrome.runtime.sendMessage({
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
      autoHideDuration: 1500,
    });
  }

  handleChangeParameters = (path, parameter) => (event) => {
    let settings = this.state.settings;
    const nextValue = event.target.value;
    if (isInteger(nextValue) || nextValue.length === 0) {
      settings[path][parameter] = nextValue;
      this.setState({ settings: settings, renderSaveBoolean: true });
    }
  };
  handleSwitch = (path, parameter) => () => {
    let settings = this.state.settings;
    if (!checkSettings(this.state.settings)) {
      settings = INIT_RELAXED_PROFILE;
    }
    if (settings[path][parameter].includes(this.state.focusedWindowId)) {
      settings[path][parameter] = removeItem(settings[path][parameter], this.state.focusedWindowId);
    } else {
      settings[path][parameter].push(this.state.focusedWindowId);
    }
    this.setState({ settings: settings, renderSaveBoolean: true }, () => {
      this.handleSaveParameters();
    });
  };

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
        onChange={this.handleChangeParameters(item.path, item.parameter)}
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
      <div className="card-body">
        <FormControlLabel
          control={
            <Switch
              checked={
                this.state.focusedWindowId && this.state.settings[POLICY][INACTIVE_POLICY]
                  ? !this.state.settings[POLICY][INACTIVE_POLICY].includes(this.state.focusedWindowId)
                  : true
              }
              onChange={this.handleSwitch(POLICY, INACTIVE_POLICY)}
              color="secondary"
              className={classes.switchWrapper}
            />
          }
          className={classes.switchContainer}
          label={<Typography className={classes.styleLabel}>Enable on this window</Typography>}
        />
        <div className={classes.introductionBlock}>
          <TuneIcon />
          <Typography className={classes.parametersTitle}>Select the best mode or customize it</Typography>
        </div>

        <FormGroup className={classes.settingsWrapper}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.focusedMode}
                onChange={() => this.handleBoolChange(FOCUSED)}
                color="secondary"
                className={classes.checkboxWrapper}
              />
            }
            label={<Typography className={classes.styleLabel}>Focus</Typography>}
            className={classes.firstBooleans}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.relaxedMode}
                onChange={() => this.handleBoolChange(RELAXED)}
                color="secondary"
                className={classes.checkboxWrapper}
              />
            }
            label={<Typography className={classes.styleLabel}>Relax</Typography>}
            className={classes.firstBooleans}
          />
          <div className={classes.customizeWrapper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.customizedBool}
                  onChange={() => this.handleBoolChange(CUSTOMIZED)}
                  color="secondary"
                  className={classes.checkboxWrapper}
                />
              }
              label={<Typography className={classes.styleLabel}>Customize</Typography>}
              className={classes.firstBooleans}
            />
            <Link href="https://tabby.us" target="_blank">
              <HelpOutlineIcon className={classes.helpIcon} />
            </Link>
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
                variant="outlined" //{this.state.customizedBool ? 'outlined' : 'secondary'}
                onClick={() => this.handleSaveParameters()}
              >
                Save
              </Button>
            </div>
          </div>
        </FormGroup>
      </div>
    );
  }
}

export default withSnackbar(Settings);
