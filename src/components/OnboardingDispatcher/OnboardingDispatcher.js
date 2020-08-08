import React, { PureComponent } from 'react';
import { logger } from '../../services/utils.js';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Welcome from '../Welcome';
import First from '../First';

class OnboardingDispatcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { appBarValue: 'WELCOME' };
  }

  handleChange = (newValue) => () => {
    this.setState({ appBarValue: newValue });
    logger(this, 'Switch to ' + newValue);
  };

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'WELCOME':
        return <Welcome type="WELCOME" handleChange={this.handleChange} />;
      case 'FIRST':
        return <First handleChange={this.handleChange} />;
      case 'END':
        return <Welcome type="END" handleChange={this.handleChange} />;
      default:
        return <div>This is an error page</div>;
    }
  }

  render() {
    const { classes } = this.props;
    const styleBox = this.state.appBarValue === 'FIRST' ? classes.paperDefault : classes.paperWelcome;
    return (
      <div className={classes.homeContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/06/05/38/landscape-1802340_1280.jpg"
          alt="background_image"
          className={classes.homeContainer}
        />
        <Modal
          //disablePortal={true}
          className={classes.modal}
          open={true}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 750,
            invisible: true,
          }}
        >
          <Box borderRadius={8} className={styleBox}>
            {this.dispatchPage()}
          </Box>
        </Modal>
      </div>
    );
  }
}

export default OnboardingDispatcher;
