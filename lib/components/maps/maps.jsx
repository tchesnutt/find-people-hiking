import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {markers: []};
    if(props.path){
      props.path.forEach(point =>
        this.state.markers.push({position: {
          lat: point[0],
          lng: point[1]
        }})
      )
    } else {
      this.state.markers.push({position:{
        lat: 25,
        lng: 31
      }})
    }
  }


  render(){
    const GettingGoogleMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: 25, lng: 31 }}
        onClick={props.onMapClick}>
        {this.state.markers.map((marker, index) => (
          <Marker
            {...marker}
            key={index}
            onRightClick={() => props.onMarkerRightClick(index)}/>
        ))}
      </GoogleMap>
    ));
    console.log(this.state);
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
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}/>
      </div>
    )
  }
}

export default Maps;
