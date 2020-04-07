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
        this.state = {open:false, beginHour:8, endHour:20, businessBool:false, casualBool:false};
    }
    componentDidMount(){
        chrome.storage.local.get(['beginHour'], (result)=>{
            const beginHour = result.beginHour || 8;
            this.setState({beginHour});
        });
        chrome.storage.local.get(['endHour'], (result)=>{
            const endHour = result.endHour || 20;
            this.setState({endHour});
        });
        chrome.storage.local.get(['businessBool'], (result)=>{
            const businessBool = result.businessBool || false;
            this.setState({businessBool});
        });
        chrome.storage.local.get(['casualBool'], (result)=>{
            const casualBool = result.casualBool || false;
            this.setState({casualBool});
        });

    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.beginHour !== this.state.beginHour || prevState.endHour !== this.state.endHour){
            this.saveActiveHoursToLocal();
        }
        const bothBoolTrue = this.state.casualBool && this.state.businessBool

        if (prevState.casualBool !== this.state.casualBool){
            if (bothBoolTrue){
                this.setState({businessBool:false},()=>{this.saveCasesBool()});
            }
            else {
                this.saveCasesBool()
            }
        }
        if (prevState.businessBool !== this.state.businessBool){
            if (bothBoolTrue){
                this.setState({casualBool:false},()=>{this.saveCasesBool()});
            }
            else {
                this.saveCasesBool()
            }
        }
    }
    removeItem(key){
        this.setState((prevState)=>{
            let items = prevState.todoListItems;
            items.splice(key, 1);
            chrome.storage.local.set({todoListItems:items});
            return {todoListItems: items}

        });
    }
    addItem(){
        if(!this.state.item)
            return;
        this.setState((prevState)=>{
            let items = prevState.todoListItems;
            items.push(prevState.item);
            chrome.storage.local.set({todoListItems:items});
            return {todoListItems: items, item:''};
        });
    }
    toggleOpen(){
        this.setState({open:!this.state.open});

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

    handleCasualChange(){
        this.setState({casualBool: !this.state.casualBool})
    }
    handleBusinessChange(){
        this.setState({businessBool: !this.state.businessBool})
    }
    saveCasesBool(){
        chrome.storage.local.set({casualBool:this.state.casualBool, businessBool:this.state.businessBool});
    }

    render(){
        const { classes } = this.props;
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
                           <h1 className={"bold-title"}>Active hours:</h1>
                        <AirbnbSlider
                            ThumbComponent={AirbnbThumbComponent}
                            //ValueLabelComponent={ValueLabelComponent}
                            getAriaLabel={index => (index === 0 ? 'Begin active hours' : 'End active hours')}
                            defaultValue={[this.state.beginHour, this.state.endHour]}
                            value={[this.state.beginHour, this.state.endHour]}
                            valueLabelDisplay="auto"
                            min={0}
                            max={24}
                            marks={ACTIVE_MARKS}
                            onChange={(e,v) => this.handleSliderChange(e,v)}
                          />
                        </div>
                        <Form className={classes.qualityWrapper} >
                          <Typography variant="h6" gutterBottom>
                            <FormControlLabel
                              control={<Checkbox
                                  checked={this.state.businessBool}
                                  onChange={()=>this.handleBusinessChange()}
                                  value="secondary"
                                  color="primary" />}
                              label="Business Use"
                            />
                          </Typography>
                            <Typography variant="h6" gutterBottom>
                            <FormControlLabel
                              control={<Checkbox
                                  checked={this.state.casualBool}
                                    onChange={()=>this.handleCasualChange()}
                                  value="secondary"
                                  color="primary" />}
                              label="Casual Use"
                            />
                          </Typography>
                        </Form>
                        <Button
                            onClick={() => this.toggleOpen(this.state.open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={this.state.open}
                            variant="outline-primary"
                            className="button"
                            disabled
                          >
                            Customize
                          </Button>
                          <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                              Still in construction...

                            </div>
                          </Collapse>
                    </div>
                </div>
            </div>)
    }

}

export default Settings;
