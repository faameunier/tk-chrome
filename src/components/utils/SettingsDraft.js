import PrimaryText from '../PrimaryText';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';

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
  const {open, children, value} = props;

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
      <span className="bar"/>
      <span className="bar"/>
      <span className="bar"/>
    </span>
  );
}

handleSliderChange(event, value);
{
  const beginHour = value[0];
  const endHour = value[1];
  this.setState({beginHour});
  this.setState({endHour});

}
;

{/*<h1 className={"bold-title"}>Active hours:</h1>*/
}
{/*<AirbnbSlider*/
}
{/*ThumbComponent={AirbnbThumbComponent}*/
}
{/*//ValueLabelComponent={ValueLabelComponent}*/
}
{/*getAriaLabel={index => (index === 0 ? 'Begin active hours' : 'End active hours')}*/
}
{/*defaultValue={[this.state.beginHour, this.state.endHour]}*/
}
{/*value={[this.state.beginHour, this.state.endHour]}*/
}
{/*valueLabelDisplay="auto"*/
}
{/*min={0}*/
}
{/*max={24}*/
}
{/*marks={ACTIVE_MARKS}*/
}
{/*onChange={(e,v) => this.handleSliderChange(e,v)}*/
}
{/*/>*/
}