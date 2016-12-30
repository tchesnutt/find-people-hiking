import React from 'react';
import {Dialog, RaisedButton} from 'material-ui';
import Dropzone from 'react-dropzone';
import Pct from 'json!../../../pct-data.json'


class UploadModal extends React.Component {
  constructor(props){
    super(props)
    this.onDrop = this.onDrop.bind(this);
    this.handleDefaultPath = this.handleDefaultPath.bind(this);
  }

  handleDefaultPath(){
    var markers = [];
    Pct.markers.forEach( (el, i) => (
      markers.push({position :{lat: el[1], lng: el[2]}, id: i, selected: false})
    ))
    this.props.addPath(markers);
  }

  onDrop(files){
    console.log(files);
    var reader = new FileReader();
    var markers = [];
    reader.readAsArrayBuffer(files[0])
    console.log(reader);
    file.forEach( (el, i) => (
      markers.push({position :{lat: el[1], lng: el[2]}, id: i, selected: false})
    ));
    this.props.addPath(markers);
  }


  render(){
    return(
      <section className='upload-modal'>
        <Dialog open={this.props.uploadModal} onRequestClose={this.props.closeUploadModal}>
          <section className='interal'>
            <section className='drop'>
              <Dropzone onDrop={this.onDrop}>
                <section>Drop your JSON file here</section>
              </Dropzone>
            </section>
            <RaisedButton label='Use Default PCT-Trail' onTouchTap={this.handleDefaultPath} primary={true}/>
          </section>
        </Dialog>
      </section>
    )
  }

}
export default UploadModal;
