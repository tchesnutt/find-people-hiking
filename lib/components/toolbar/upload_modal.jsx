import React from 'react';
import {Dialog, RaisedButton} from 'material-ui';
import {Dropzone} from 'react-dropzone';


class UploadModal extends React.Component {
  constructor(props){
    super(props)
  }

  handleDefaultPath(){
    var defaultPath = require('../../../pct-data.json');
    this.props.addPath({path: defaultPath});
  }

  onDrop(files){
    this.props.addPath({path: files});
  }

  render(){
    return(
      <Dialog open={this.props.uploadModal} onRequestClose={this.props.closeUploadModal}>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop your JSON file here</div>
        </Dropzone>
        <RaisedButton label='Use Default' onTouchTap={this.handleDefaultPath}/>
        <RaisedButton label='Close' onTouchTap={this.props.closeUploadModal}/>
      </Dialog>
    )
  }

}
export default UploadModal;
