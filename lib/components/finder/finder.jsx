import React from 'react';
import { TextField, RaisedButton, FlatButton } from 'material-ui';
import Haversine from 'haversine';
import latLngUtils from '../../utils/lat_lng'

class Finder extends React.Component {
  constructor(props){
    super(props)
    this.start = {
      latitude: NaN,
      longitude: NaN
    };

    this.state = {
      closestPoint: undefined,
      dist: undefined,
      error: false
    };
    
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    if (field === "latitude"){
      return e => {this.start.latitude = e.currentTarget.value};
    } else if (field === "longitude"){
      return e => {this.start.longitude = e.currentTarget.value};
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(latLngUtils.validLatLng(-90, this.start.latitude, 90) && latLngUtils.validLatLng(-180, this.start.longitude, 180)) {
      this.findClosestPoint()
    } else {
      let error = 'You must enter valid coordinates';
      this.props.showError(error);
    }
  }

  findClosestPoint(){
    let dist;
    let closestPoint;
    if(this.props.path){
      this.props.path.forEach( el => {
        let end = {
          latitude: el.position.lat,
          longitude: el.position.lng
        };
        let result = Haversine(this.start, end, {unit: 'mile'});
        if (dist === undefined) {
          dist = result;
          closestPoint = el;
        } else if (dist > result) {
          dist = result;
          closestPoint = el;
        }
      })
      let lineR = [];
      let begin = {
        position: {
          lat: parseFloat(this.start.latitude),
          lng: parseFloat(this.start.longitude)
        }
      }
      lineR.push(begin);
      lineR.push(closestPoint);
      let obj = {
        line: lineR,
        dist: dist
      }
      this.props.addLineAndDist(obj)
    } else {
      let error = 'You need to upload a trail first';
      this.props.showError(error);
    }
  }

  render(){
    if (this.props.dist) {
      return(
        <section className='haversine'>
          <form className='haversine-options' onSubmit={this.handleSubmit}>
            <TextField type='text' floatingLabelText='Hiker Latitude' onChange={this.update('latitude')} className='left-options-item-right'/>
            <TextField type='text' floatingLabelText='Hiker Longitude' onChange={this.update("longitude")} className='left-options-item-right'/>
            <FlatButton label='Find Closest Point' type='submit' primary={true}/>
          </form>
          <section className='text'>
            <p>Your hiker is {this.props.dist.toFixed(2)} miles from {this.props.line[1].position.lat.toFixed(4)}, {this.props.line[1].position.lng.toFixed(4)} (Mile #: {this.props.line[1].id})</p>
          </section>
        </section>
      )
    } else {
      return(
        <section className='haversine'>
          <form className='haversine-options' onSubmit={this.handleSubmit}>
            <TextField type='text' floatingLabelText='Hiker Latitude' onChange={this.update('latitude')} className='left-options-item-right'/>
            <TextField type='text' floatingLabelText='Hiker Longitude' onChange={this.update("longitude")} className='left-options-item-right'/>
            <FlatButton label='Find Hiker' type='submit' primary={true}/>
          </form>
        </section>
      )
    }
  }
}

export default Finder;
