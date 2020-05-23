import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import TuneIcon from '@material-ui/icons/Tune';
import { withSnackbar } from 'notistack';
import {
  RELAXED,
  FOCUSED,
  CUSTOMIZED,
  INIT_FOCUSED_PROFILE,
  INIT_RELAXED_PROFILE,
} from '../../config/settingsProfiles.js';
import { checkSettings, OPTIMAL_NUMBER_TABS, POLICY, ACTIVE_POLICY } from '../utils';
import { isInteger } from '../../services/utils';

class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: INIT_RELAXED_PROFILE,
      renderSaveBoolean: false,
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
    chrome.storage.local.get(['active_profile', 'settings'], (result) => {
      const profile = result.active_profile || RELAXED;
      const focusedMode = profile === FOCUSED;
      const relaxedMode = profile === RELAXED;
      const customizedBool = profile === CUSTOMIZED;
      const settings = result.settings || INIT_RELAXED_PROFILE;
      this.setState({
        focusedMode,
        relaxedMode,
        customizedBool,
        settings,
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
    settings[path][parameter] = !this.state.settings[path][parameter];
    this.setState({ settings: settings, renderSaveBoolean: true }, () => {
      this.handleSaveParameters();
    });
  };

  render() {
    const { classes } = this.props;
    const inputsParameters = [
      {
        label: 'Optimal number of tabs ',
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
              checked={this.state.settings[POLICY][ACTIVE_POLICY]}
              onChange={this.handleSwitch(POLICY, ACTIVE_POLICY)}
              color="secondary"
            />
          }
          label="Enable Tabby"
        />
        <div className={classes.introductionBlock}>
          <TuneIcon />
          <Typography variant="h3" className={classes.title}>
            Select the suiting mode or customize it.
          </Typography>
        </div>
        <div className={classes.textField}>
          <div className={classes.activeBar}></div>
          {/*<h1 className={"bold-title"}>Select Tabby's operating mode:</h1>*/}
          <Form className={classes.settingsWrapper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.focusedMode}
                  onChange={() => this.handleBoolChange(FOCUSED)}
                  value="secondary"
                  color="secondary"
                />
              }
              label="Focused"
              className={classes.firstBooleans}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.relaxedMode}
                  onChange={() => this.handleBoolChange(RELAXED)}
                  value="secondary"
                  color="secondary"
                />
              }
              label="Relaxed"
              className={classes.firstBooleans}
            />
            <FormControlLabel
              onChange={() => this.handleBoolChange(CUSTOMIZED)}
              control={<Checkbox checked={this.state.customizedBool} value="" color="secondary" />}
              label="Customize your settings' parameters"
            />
            <div className={classes.settingsBlock}>
              <FormControl
                //className={classes.content}
                required
                fullWidth
              >
                {listItemsParameters}
              </FormControl>
              <TextField hidden key="hidden-textfield" disabled />
              <div>
                <Button
                  disabled={!this.state.customizedBool}
                  className={classes.secondaryButton}
                  variant={this.state.customizedBool ? 'outline-primary' : 'secondary'}
                  onClick={() => this.handleSaveParameters()}
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default withSnackbar(Settings);
