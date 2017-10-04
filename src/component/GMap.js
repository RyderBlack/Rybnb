import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
//import markerImage1 from '../assets/marker-voiture-vert.png';
import markerImage2 from '../assets/marker-voiture-violet-info-bulle.png';
import '../App.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicnlkZXJibGFjayIsImEiOiJjajhidzF5ejkwMXRnMzNwMmtuMmZqZzlrIn0.Z9YztQmEdBTnRzlF_A_XvQ"
});

export default class GMap extends Component {

  

  render() {

    let newObj = Object.values(this.props.mapDetails);
    //console.log(newObj[0]);
    let markersListings = newObj.map((data, index) => 
     <Marker key={index}
      coordinates={[data.position.lng, data.position.lat]}
      anchor="bottom">
      
      <img src={markerImage2} alt="" className="img-marker"/>
    </Marker>
    )

    return (
      <div>
      <p>GMap</p>
      <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "700px",
        width: "700px"
      }}
      zoom={[11]}
      center={[5.369780,43.296482]}>
      {markersListings}
        
    </Map>
      </div>
    );
  }
}
