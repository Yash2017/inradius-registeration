import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Radius from "./Radius";
function Map({ lat, long }) {
  const latitude = parseFloat(lat);
  const longitude = parseFloat(long);
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
        <Radius lat={latitude} lng={longitude} />
      </GoogleMap>
    ))
  );

  return (
    <>
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCj2UxICHi4wVE3U0mgMh9HteU1X-94hDQ"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "80vh" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
}

export default Map;
