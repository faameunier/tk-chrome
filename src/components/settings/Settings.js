import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PrimaryText from '../primary-text'
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
      // display: inline-block !important;
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

function CrossButton(props){
    return(<Button type="button" className="close" aria-label="Close" onClick={()=>props.removeItem(props.itemKey)}><span aria-hidden="true">&times;</span></Button>)
}

class Settings extends PureComponent {
    constructor(props){
        console.log("Constructor");
        super(props);
        this.state = {open:false, beginHour:8, endHour:20, businessBool:false, casualBool:false};
    }
    componentDidMount(){
        console.log("DidMount");
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
        console.log("DidUpdate");

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
        //console.log("slider changed event:",event);
        //console.log("slider changed value: ", value);
        console.log("slider :",value[0]);
        const beginHour = value[0];
        const endHour = value[1]
        console.log(this.state);
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
        console.log("casualBool in save loop:", this.state.casualBool);
        console.log("businessBool in save loop:", this.state.businessBool);
        chrome.storage.local.set({casualBool:this.state.casualBool, businessBool:this.state.businessBool});
    }

    render(){
        const { classes } = this.props;
        console.log("Render state", this.state);
        return(
            <div className="card todo-list-container">
                <div className="card-header" >
                    <h3 className="card-title">TabKiller Settings</h3>
                    <div className={classes.textField}>
                        <PrimaryText
                            text={
                              'Select the suiting option or customize it.'
                            }
                          />
                        <div className={classes.activeBar}>
                           <h1 className={"bold-title"}>Active hours:</h1>
                        <AirbnbSlider
                            ThumbComponent={AirbnbThumbComponent}
                            ValueLabelComponent={ValueLabelComponent}
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
                          >
                            Customize?
                          </Button>
                          <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                          </Collapse>
                    </div>
                </div>
            </div>)
    }

}

export default Settings;