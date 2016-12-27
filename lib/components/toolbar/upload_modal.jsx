import React from 'react';
import {Dialog, RaisedButton} from 'material-ui';
import Dropzone from 'react-dropzone';


class UploadModal extends React.Component {
  constructor(props){
    super(props)
  }

  handleDefaultPath(){
    var defaultPath = require('./pct-data.json');
    console.log(defaultPath);
    this.props.addPath({path: defaultPath});
  }

  onDrop(files){
    console.log(files);
    console.log(this.props);
    var markers = [];
    files.forEach( el => (
      markers.push({lat: el[0], lng: el[1]})
    ) );
    this.props.addPath(markers);
  }

  render(){
    return(
      <section>
        <Dialog open={this.props.uploadModal} onRequestClose={this.props.closeUploadModal}>
          <Dropzone onDrop={this.onDrop}>
            <div>Drop your JSON file here</div>
          </Dropzone>
          <RaisedButton label='Use Default' onTouchTap={this.handleDefaultPath}/>
          <RaisedButton label='Close' onTouchTap={this.props.closeUploadModal}/>
        </Dialog>
      </section>
    )
  }

}
export default UploadModal;
