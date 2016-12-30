import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markers: [],
      line: [{}, { position: {lat: 37.0902, lng: -95.7129} }],
      dist: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markers: nextProps.path,
      line: nextProps.line,
      dist: nextProps.dist
    })
  }


  render(){
    let center = {
      lat: parseInt(this.state.line[1].position.lat),
      lng: parseInt(this.state.line[1].position.lng)
    };
    let line = [this.state.line[0].position, this.state.line[1].position];
    let path = [];
    this.state.markers.forEach( el => {
      path.push(el.position)
    })
    const GettingGoogleMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={7}
        defaultCenter={center}
        onClick={props.onMapClick}>
        <Marker {...this.state.line[0]} key='user' label='Dad'/>
        <Marker {...this.state.line[1]} key='point'/>
        <Polyline path={line}
          strokeColor='#FF0000'
          strokeOpacity='.5'/>
        <Polyline path={path}
          strokeColor='#FF0000'
          strokeOpacity='.2'/>
      </GoogleMap>
    ));
    return (
      <div style={{height: `100%`,
                   width: `50%`}}>
        <GettingGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          onMarkerRightClick={this.handleMarkerRightClick}/>
      </div>
    )
  }
}

export default Maps;
