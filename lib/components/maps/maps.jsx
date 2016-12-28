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
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({markers: nextProps.path})
  }


  render(){
    const GettingGoogleMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
        onClick={props.onMapClick}>
        {this.state.markers.map((marker, index) => (
          <Marker
            {...marker}
            key={index}
            onRightClick={() => props.onMarkerRightClick(index)}/>
        ))}
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
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}/>
      </div>
    )
  }
}

export default Maps;
