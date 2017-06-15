import React from 'react';
import { Dialog, FlatButton } from 'material-ui';

const welcomeStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};


class Welcome extends React.Component {
  constructor(props){
    super(props)
    this.handleTour = this.handleTour.bind(this);
  }

  handleTour(){
    this.props.killWelcome();
    this.props.startTour();
  }

  render(){
    return(
      <Dialog className='welcome'
              open={this.props.welcome}
              onRequestClose={this.props.killWelcome}
              title='Welcome to Find People Hiking'
              contentStyle={ welcomeStyle }>
        <div>
          <img src='./lil_baby_hiker.jpg'/>
          <br/>
          <p>This is a browser tool designed to find where your loved ones are in relation to a trail. Upload CRUDable points that are plotted using Google Maps API. Pick a coordinate on the map to find the closest point on the trail!</p>
          <br/>
        </div>
        <div className='welcome-bottom'>
          <FlatButton label='Take the Tour' onTouchTap={this.handleTour} primary={true}/>
          <FlatButton label='Close' onTouchTap={this.props.killWelcome} primary={true}/>
        </div>
      </Dialog>
    )
  }
}

export default Welcome;
