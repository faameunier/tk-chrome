import React, { PureComponent } from 'react';
import { logger } from '../../services/utils.js';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

import Welcome from '../Welcome';
import OnboardingPage from '../OnboardingPage';

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
      case 'ONBOARDING_PAGE':
        return <OnboardingPage handleChange={this.handleChange} />;
      case 'END':
        return <Welcome type="END" handleChange={this.handleChange} />;
      default:
        return <div>This is an error page</div>;
    }
  }

  render() {
    const { classes } = this.props;
    const styleBox = this.state.appBarValue === 'ONBOARDING_PAGE' ? classes.paperDefault : classes.paperWelcome;
    return (
      <div className={classes.homeContainer}>
        <img
          src="https://uploads-ssl.webflow.com/5e4d88dc34500365793bfc0b/5f33c165eadeb37d391596d2_landscape-1802340_1920-p-1080.jpeg"
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
