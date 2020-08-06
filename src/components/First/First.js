import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';

class First extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    const opts = {
      height: '300',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <div className={classes.mainContainer}>{<YouTube videoId="eKfImHIcqwY" opts={opts} />}</div>;
  }
}
export default First;
