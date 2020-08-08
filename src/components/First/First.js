import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function getSteps() {
  return [
    'How to pin tabby?',
    'How to restore tabs?',
    'How to personalize your settings?',
    'How to protect your tabs?',
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Pin tabby to your browser extension bar, to easily access it.';
    case 1:
      return 'Find and restore removed tabs with their full history.';
    case 2:
      return 'Personalize your online experience with 1-click within the settings.';
    case 3:
      return 'Protect important tabs, like mail and messaging apps among others.';
    default:
      return 'Unknown stepIndex';
  }
}

function getStepUrl(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'eKfImHIcqwY';
    case 1:
      return '9v4XbJop918';
    case 2:
      return 'eKfImHIcqwY';
    case 3:
      return '9v4XbJop918';
    default:
      return 'Unknown stepIndex';
  }
}

class First extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 37 && this.state.activeStep !== 0) {
      this.handleBack();
    }
    if (event.keyCode === 39 && this.state.activeStep !== 3) {
      this.handleNext();
    }
    if (event.keyCode === 13 && this.state.activeStep === 3) {
      this.props.handleChange('END')();
    }
  };
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };
  handleStep = (step) => () => {
    this.setState({ activeStep: step });
  };
  isStepComplete = (index) => {
    return index < this.state.activeStep;
  };

  render() {
    const { classes } = this.props;

    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const steps = getSteps();

    return (
      <div className={classes.mainContainer}>
        <div className={classes.titleGroup}>
          <Typography className={classes.title}>{steps[this.state.activeStep]}</Typography>
          <Typography className={classes.subtitle}>{getStepContent(this.state.activeStep)}</Typography>
        </div>
        <div className={classes.videoContainer}>
          <YouTube videoId={getStepUrl(this.state.activeStep)} opts={opts} classname={classes.video} />
        </div>
        <div className={classes.stepperContainer}>
          <IconButton
            color="secondary"
            component="div"
            onClick={this.handleBack}
            disabled={this.state.activeStep === 0}
            className={classes.iconContainer}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Stepper
            alternativeLabel
            nonLinear
            color="secondary"
            activeStep={this.state.activeStep}
            className={classes.stepper}
          >
            {steps.map((label, index) => {
              return (
                <Step color="secondary" key={label}>
                  <StepButton color="secondary" onClick={this.handleStep(index)} completed={this.isStepComplete(index)}>
                    <StepLabel
                      StepIconProps={{
                        classes: {
                          root: classes.stepIcon,
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
          {this.state.activeStep === 3 ? (
            <Button
              size="small"
              onClick={this.props.handleChange('END')}
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              {'Done'}
            </Button>
          ) : (
            <IconButton color="secondary" component="div" onClick={this.handleNext} className={classes.iconContainer}>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  }
}

export default First;
