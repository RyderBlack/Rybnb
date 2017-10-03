import React, { Component } from 'react';
import ReactMapboxGl, { Layer, GeoJSONLayer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicnlkZXJibGFjayIsImEiOiJjajhidzF5ejkwMXRnMzNwMmtuMmZqZzlrIn0.Z9YztQmEdBTnRzlF_A_XvQ"
});

export default class GMap extends Component {

  
   
  

  render() {
    console.log(this.props.mapDetails)
    return (
      <div>
      <p>GMap</p>
      <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "700px",
        width: "700px"
      }}
      zoom={[12]}
      center={[-122.335167,47.608013]}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-16" }}>
        
        </Layer>
        <GeoJSONLayer
        data={this.props.mapDetails}
        symbolLayout={{
          "text-field": "{place}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }}/>
    </Map>
      </div>
    );
  }
}
