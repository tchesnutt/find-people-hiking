import React from 'react';
import {Dialog, RaisedButton} from 'material-ui';
import Dropzone from 'react-dropzone';
import Pct from 'json!../../../pct-data.json'

//css page
class UploadModal extends React.Component {
  constructor(props){
    super(props)
    this.onDrop = this.onDrop.bind(this);
    this.handleDefaultPath = this.handleDefaultPath.bind(this);
  }

  handleDefaultPath(){
    var markers = [];
    Pct.markers.forEach( el => (
      markers.push({position :{lat: el[1], lng: el[2]}})
    ))
    this.props.addPath(markers);
    this.props.closeUploadModal;
  }

  onDrop(files){
    //onDropfiles still not working
    var markers = [];
    files.forEach( el => (
      markers.push({lat: el[0], lng: el[1]})
    ));
    this.props.addPath(markers);
    this.props.closeUploadModal;
  }


  render(){
    return(
      <section className='upload-modal'>
        <Dialog open={this.props.uploadModal} onRequestClose={this.props.closeUploadModal}>
          <Dropzone onDrop={this.onDrop}>
            <div>Drop your JSON file here</div>
          </Dropzone>
          <RaisedButton label='Use Default' onTouchTap={this.handleDefaultPath}/>
        </Dialog>
      </section>
    )
  }

}
export default UploadModal;
