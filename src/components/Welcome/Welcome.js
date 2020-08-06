import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={classes.titleGroup}>
          <Typography className={classes.title}>Welcome to Tabby</Typography>
          <Typography className={classes.subtitle}>Your intelligent tab manager</Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            onClick={this.props.handleChange('FIRST')}
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            {'Start'}
          </Button>
        </div>
      </div>
    );
  }
}

export default Welcome;
