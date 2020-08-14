import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Slide from '@material-ui/core/Slide/Slide';

class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.props.handleChange('ONBOARDING_PAGE')();
    }
  };
  render() {
    const { classes, type } = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={classes.titleGroup}>
          <Typography className={classes.title}>{type === 'WELCOME' ? 'Welcome to Tabby' : 'That’s all!'}</Typography>
          <Typography className={classes.subtitle}>
            {type === 'WELCOME' ? 'Your intelligent tab manager' : 'We wish you a wonderful browsing experience.'}
          </Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            onClick={this.props.handleChange('ONBOARDING_PAGE')}
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            {type === 'WELCOME' ? 'Start' : 'Return'}
          </Button>
        </div>
      </div>
    );
  }
}

export default Welcome;
