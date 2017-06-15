import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markers: [],
      line: [{},{}],
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
    const GettingGoogleMap = withGoogleMap(props => {
      let isLine = !(this.state.line[0].position === undefined);
      let isPath = !(this.state.markers.length === 0);
      if((isLine === false) && (isPath === false)) {
        return(
          <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={4}
            defaultCenter={{lat: 37.0902, lng: -95.7129}}
            onClick={props.onMapClick}>
          </GoogleMap>
        );
      } else if((isLine === false) && (isPath === true)) {
        let halfway = Math.floor(this.state.markers.length / 2);
        let center = {
          lat: this.state.markers[halfway].position.lat,
          lng: this.state.markers[halfway].position.lng
        };
        let path = [];
        this.state.markers.forEach( el => {
          path.push(el.position)
        });
        return(
          <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={5}
            defaultCenter={center}
            onClick={props.onMapClick}>
            <Marker {...this.state.markers[0]} key='start' label='Start'/>
            <Marker {...this.state.markers[this.state.markers.length - 1]} key='end' label='End'/>
            <Polyline path={path}
              options={{strokeColor: `#FF0000`,
                      strokeOpacity: `.7`}}/>
          </GoogleMap>
        )
      } else if((isLine === true) && (isPath === true)) {
        let halfway = Math.floor(this.state.markers.length / 2);
        let center = {
          lat: parseFloat(this.state.line[1].position.lat),
          lng: parseFloat(this.state.line[1].position.lng)
        };
        let line = [this.state.line[0].position, this.state.line[1].position];
        let path = [];
        this.state.markers.forEach( el => {
          path.push(el.position)
        });
        return(
          <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={7}
            defaultCenter={center}
            onClick={props.onMapClick}>
            <Marker {...this.state.markers[0]} key='start' label='Start'/>
            <Marker {...this.state.markers[this.state.markers.length - 1]} key='end' label='End'/>
            <Marker {...this.state.line[0]} key='user' label='Hiker'/>
            <Marker {...this.state.line[1]} key='point' label={this.state.line[1].id.toString()}/>
            <Polyline path={line}
              options={{strokeColor: `#000000`,
                      strokeOpacity: `1`,
                      strokeWeight: `0.7`}}/>
            <Polyline path={path}
              options={{strokeColor: `#FF0000`,
                      strokeOpacity: `.7`}}/>
          </GoogleMap>
        )
      }
    });
    return(
      <div className="second-step">
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
