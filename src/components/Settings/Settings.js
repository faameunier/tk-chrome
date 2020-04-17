import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import TuneIcon from '@material-ui/icons/Tune';
import { withSnackbar } from 'notistack';

const IS_RELAXED_MODE = 'IS_RELAXED_MODE';
const IS_FOCUSED_MODE = 'IS_FOCUSED_MODE';
const IS_CUSTOMIZED_MODE = 'IS_CUSTOMIZED_MODE';
const OPTIMAL_NUMBER_TABS = 'target_tabs';
const POLICY = 'policy';

class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: { policy: { target_tabs: 100 } },
      renderSaveBoolean: false,
    };
    this.onChangedCallback = function (changes) {
      const changesSettings = changes['tabby_settings'];
      const changesProfile = changes['tabby_profile'];
      if (changesSettings) {
        this.setState({
          settings: changesSettings['newValue'],
          renderSaveBoolean: true,
        });
      }
      if (changesProfile) {
        this.setState({
          focusedMode: changesProfile['newValue']['focused'],
          relaxedMode: changesProfile['newValue']['relaxed'],
          customizedBool: changesProfile['newValue']['customized'],
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get(['tabby_profile', 'tabby_settings'], (result) => {
      const profile = result.tabby_profile || {
        focused: false,
        relaxed: false,
        customized: false,
      };
      const focusedMode = profile.focused;
      const relaxedMode = profile.relaxed;
      const customizedBool = profile.customized;
      const settings = result.tabby_settings || {
        policy: { target_tabs: 100 },
      };
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
      profile: {
        relaxed: changeType === IS_RELAXED_MODE,
        focused: changeType === IS_FOCUSED_MODE,
        customized: changeType === IS_CUSTOMIZED_MODE,
      },
    });
    if (changeType === IS_RELAXED_MODE || changeType === IS_FOCUSED_MODE) {
      this.notifyUser();
    }
  }

  forceRender() {
    this.setState({ renderSaveBoolean: false });
  }

  handleSaveParameters() {
    chrome.runtime.sendMessage({
      messageType: 'SETTINGS_PARAMETERS',
      settings: this.state.settings,
    });
    this.notifyUser();
  }

  notifyUser() {
    this.props.enqueueSnackbar('New Settings are saved.', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transitionDuration: 750,
      autoHideDuration: 2000,
    });
  }

  handleChangeParameters = (path, parameter) => (event) => {
    let settings = this.state.settings;
    settings[path][parameter] = event.target.value;
    this.setState({ settings: settings, renderSaveBoolean: true });
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
        inputProps={item.inputProps}
      />
    ));
    return (
      <div className="card todo-list-container">
        <div className="card-body">
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
                    onChange={() => this.handleBoolChange(IS_FOCUSED_MODE)}
                    value="secondary"
                    color="primary"
                  />
                }
                label="Focused"
                className={classes.firstBooleans}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.relaxedMode}
                    onChange={() => this.handleBoolChange(IS_RELAXED_MODE)}
                    value="secondary"
                    color="primary"
                  />
                }
                label="Relaxed"
                className={classes.firstBooleans}
              />
              <FormControlLabel
                onChange={() => this.handleBoolChange(IS_CUSTOMIZED_MODE)}
                control={
                  <Checkbox
                    checked={this.state.customizedBool}
                    value=""
                    color="primary"
                  />
                }
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
                <div>
                  <Button
                    disabled={!this.state.customizedBool}
                    className={classes.secondaryButton}
                    variant={
                      this.state.customizedBool ? 'outline-primary' : 'primary'
                    }
                    onClick={() => this.handleSaveParameters()}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(Settings);
