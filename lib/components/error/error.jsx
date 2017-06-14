import React from 'react';
import { Dialog, FlatButton } from 'material-ui';


class ErrorModal extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Dialog className='error' contentStyle={{width: 400}} open={this.props.show} autoScrollBodyContent={true} onRequestClose={this.props.killError} title='Error'>
        <div>
          <br/>
          <p>{this.props.message}</p>
          <br/>
        </div>
        <div className='error-bottom'>
          <FlatButton label='Close' onTouchTap={this.props.killError} primary={true}/>
        </div>
      </Dialog>
    )
  }
}

export default ErrorModal;
