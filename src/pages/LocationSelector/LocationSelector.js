import React from "react";
import "antd/dist/antd.css";
import Map from "./Map";
import useGeoLocation from "./GeoLocationHook/UseGeoLocation";
function LocationSelector() {
  const location = useGeoLocation();
  console.log(location);
  return (
    <>
      <Map lat={location.coordinates.lat} long={location.coordinates.lng} />
    </>
  );
}

export default LocationSelector;
