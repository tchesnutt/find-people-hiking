import React from 'react';
import {Dialog, RaisedButton} from 'material-ui';
import {Dropzone} from 'react-dropzone';


class UploadModal extends React.Component {
  constructor(props){
    super(props)
  }

  handleDefaultPath(){
    var defaultPath = require('../../../package.json');
    this.props.addPath({path: defaultPath});
  }

  onDrop(files){
    this.props.addPath({path: files});
  }

  render(){
    return(
      <Dialog>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop your JSON file here</div>
        </Dropzone>
        <RaisedButton label='Use Default' onTouchTap={handleDefaultPath()}/>
        <RaisedButton label='Close' onTouchTap={this.props.closeUploadModal()}/>
      </Dialog>
    )
  }

}
