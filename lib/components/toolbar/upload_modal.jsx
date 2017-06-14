import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
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
      markers.push({position :{lat: parseFloat(el[1]), lng: parseFloat(el[2])}, id: parseFloat(el[0]), selected: false})
    ))
    this.props.addPath(markers);
    this.props.closeUploadModal();
  }

  onDrop(files){
    let f = files[0];
    var reader = new FileReader();
    reader.onload = ((file) => (
      e => {
        let JsonObj = JSON.parse(e.target.result)
        let points = [];
        JsonObj.markers.forEach( (el, i) => (
          points.push({position :{lat: parseFloat(el[1]), lng: parseFloat(el[2])}, id: parseFloat(el[0]), selected: false})
        ));
        this.props.addPath(points);
      }
    ))(f)
    reader.readAsText(files[0])
  }


  render(){
    return(
      <section className='upload-modal'>
        <Dialog open={this.props.uploadModal} onRequestClose={this.props.closeUploadModal}>
          <section className='interal'>
            <section className='drop'>
              <Dropzone onDrop={this.onDrop}>
                <h2 className='dropzone-text'>Drop your JSON file here!</h2>
              </Dropzone>
            </section>
            <div className='upload-bottom'>
              <FlatButton label='Use Default PCT-Trail' onTouchTap={this.handleDefaultPath} primary={true}/>
              <FlatButton label='Close' onTouchTap={this.props.closeUploadModal} primary={true}/>
            </div>
          </section>
        </Dialog>
      </section>
    )
  }

}
export default UploadModal;
