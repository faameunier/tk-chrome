import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PrimaryText from '../PrimaryText'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const IS_RELAXED_MODE = 'IS_RELAXED_MODE';
const IS_FOCUSED_MODE = 'IS_FOCUSED_MODE';
const IS_CUSTOMIZED_MODE = 'IS_CUSTOMIZED_MODE';
const OPTIMAL_NUMBER_TABS = 'target_tabs';

const ACTIVE_MARKS = [
  {
    value: 0,
    label: '00:00',
  },
  {
    value: 9,
    label: '09:00',
  },
  {
    value: 18,
    label: '18:00',
  },
  {
    value: 24,
    label: '24:00',
  },
];

function ValueLabelComponent(props) {
  const {open, children, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

class Settings extends PureComponent {
    constructor(props){
        super(props);
        this.state = {open:false, beginHour:0, endHour:24, focusedMode:false, relaxedMode:false, customizedBool: false,
                        settings: {policy: {target_tabs: 100}}, renderSaveBoolean:false};
    }
    componentDidMount(){
        chrome.storage.local.get(['beginHour','endHour','focusedMode','relaxedMode','customizedBool', 'settings'], (result)=>{
            const beginHour = result.beginHour || 0;
            const endHour = result.endHour || 24;
            const focusedMode = result.focusedMode || false;
            let relaxedMode = result.relaxedMode || false;
            const customizedBool = result.customizedBool || false;
            // if (!customizedBool && !relaxedMode && !customizedBool){
            //     relaxedMode = true;
            // }
            console.log('SETTINGS IN FRONT', result.settings);

            const settings = result.settings || {policy: {target_tabs: 100}};
            this.setState({beginHour, endHour, focusedMode, relaxedMode, customizedBool, settings});
        });

        chrome.storage.onChanged.addListener( function(changes) {
            const changesSettings= changes['settings'];
            console.log("Changes in FRONT", changes);
            if (changesSettings){
                console.log('CHANGES to SETTINGS');
                self.setState({settings: changesSettings['newValue'], renderSaveBoolean: true});
            }
        });
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.beginHour !== this.state.beginHour || prevState.endHour !== this.state.endHour){
            this.saveActiveHoursToLocal();
        }
        if (prevState.relaxedMode !== this.state.relaxedMode ||
            prevState.focusedMode !== this.state.focusedMode ||
            prevState.customizedBool !== this.state.customizedBool){
                this.saveSettingsToState();
                this.saveCasesBool();
        }
        if (this.state.renderSaveBoolean){
            this.forceRender();
        }
    }
    handleSliderChange(event, value){
        const beginHour = value[0];
        const endHour = value[1]
        this.setState({ beginHour });
        this.setState({ endHour });

  };
    saveActiveHoursToLocal(){
        chrome.storage.local.set({beginHour:this.state.beginHour, endHour:this.state.endHour});
    }

    handleBoolChange(changeType){
        this.setState({relaxedMode: changeType===IS_RELAXED_MODE, focusedMode:changeType===IS_FOCUSED_MODE,
                        customizedBool:changeType===IS_CUSTOMIZED_MODE});

    }
    saveSettingsToState(){
        console.log('ENTER SAVE_SETTINGS_TO_STATE');
        let settings = this.state.settings;
        if (this.state.focusedMode){
            settings['policy']['target_tabs'] = 5;
        }
        else if(this.state.relaxedMode){
            settings['policy']['target_tabs'] = 12;
        }

        if (!this.state.customizedBool) {
            console.log("SENDING MESSAGE", settings);
            chrome.runtime.sendMessage({messageType: 'POLICY', path:'target_tabs',
                                        value:settings['policy']['target_tabs']});
        }
        //this.setState({settings, renderSaveBoolean:true});

    }
    saveCasesBool(){
        chrome.storage.local.set({relaxedMode:this.state.relaxedMode, focusedMode:this.state.focusedMode,
            customizedBool:this.state.customizedBool}
        );
    }
     forceRender(){
        this.setState({renderSaveBoolean:false});
    }
    handleChangeParameters = parameter => event =>{
        let settings = this.state.settings;
        settings['policy'][parameter] = event.target.value;
        this.setState({settings: settings, renderSaveBoolean:true});
    }
    render(){
        const { classes } = this.props;
            const inputsParameters = [
      {
        label: 'Optimal number of tabs ',
        value: this.state.settings.policy.target_tabs,
        onChange: OPTIMAL_NUMBER_TABS,
        inputProps: { min: '1', max: '100', step: '1' },
      },
    ];
    const listItemsParameters = inputsParameters.map((item, index) => (
      <TextField
        key={index}
        disabled={!this.state.customizedBool}
        label={item.label}
        onChange={this.handleChangeParameters(item.onChange)}
        value={item.value}
        className={classes.textField}
        type="number"
        inputProps={item.inputProps}
      />
    ));
        return(
            <div className="card todo-list-container">
                <div className="card-body" >
                    <PrimaryText
                            text={
                              'Select the suiting option or customize it.'
                            }
                          />
                    <div className={classes.textField}>
                        <div className={classes.activeBar}>
                           {/*<h1 className={"bold-title"}>Active hours:</h1>*/}
                        {/*<AirbnbSlider*/}
                            {/*ThumbComponent={AirbnbThumbComponent}*/}
                            {/*//ValueLabelComponent={ValueLabelComponent}*/}
                            {/*getAriaLabel={index => (index === 0 ? 'Begin active hours' : 'End active hours')}*/}
                            {/*defaultValue={[this.state.beginHour, this.state.endHour]}*/}
                            {/*value={[this.state.beginHour, this.state.endHour]}*/}
                            {/*valueLabelDisplay="auto"*/}
                            {/*min={0}*/}
                            {/*max={24}*/}
                            {/*marks={ACTIVE_MARKS}*/}
                            {/*onChange={(e,v) => this.handleSliderChange(e,v)}*/}
                          {/*/>*/}
                        </div>
                       <h1 className={"bold-title"}>Select Tabby's operating mode:</h1>
                        <Form className={classes.qualityWrapper} >
                          <Typography variant="h6" gutterBottom>
                            <FormControlLabel
                              control={<Checkbox
                                  checked={this.state.focusedMode}
                                  onChange={()=>this.handleBoolChange(IS_FOCUSED_MODE)}
                                  value="secondary"
                                  color="primary" />}
                              label="Focused Mode"
                            />
                          </Typography>
                            <Typography variant="h6" gutterBottom>
                            <FormControlLabel
                              control={<Checkbox
                                  checked={this.state.relaxedMode}
                                    onChange={()=>this.handleBoolChange(IS_RELAXED_MODE)}
                                  value="secondary"
                                  color="primary" />}
                              label="Relaxed Mode"
                            />
                          </Typography>
                        </Form>
                      <Typography variant="h6" gutterBottom>
                        <FormControlLabel
                          onChange={()=>this.handleBoolChange(IS_CUSTOMIZED_MODE)}
                          control={<Checkbox checked={this.state.customizedBool} value="" color="primary" />}
                          label="Customize your settings' parameters"
                        />
                      </Typography>

                      <FormControl className={classes.content} required fullWidth>
                        {listItemsParameters}
                      </FormControl>
                      <div>
                        <Button
                            disabled={!this.state.customizedBool}
                            className={classes.secondaryButton}
                            variant={this.state.customizedBool? 'outline-primary':'primary'}
                            onClick={this.handleSaveClick}
                            >
                          Save
                      </Button>
                      </div>
                    </div>
                </div>
            </div>)
    }

}

export default Settings;
