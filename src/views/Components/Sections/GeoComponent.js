import React from 'react';
import { geolocated, geoPropTypes } from "react-geolocated";

const getDirection = (degrees, isLongitude) =>
  degrees > 0
    ? (isLongitude ? 'E' : 'N')
    : (isLongitude ? 'W' : 'S');

const formatDegrees = (degrees, isLongitude) =>
  `${0 | degrees}° ${0 | (degrees < 0 ? degrees = -degrees : degrees) % 1 * 60}' ${0 | degrees * 60 % 1 * 60}" ${getDirection(degrees, isLongitude)}`


class GeoComponent extends React.Component {

  render() {
  
    const { props } = this;
    if(props.coords){
    	props.getLocation(props.coords.latitude, props.coords.longitude)
    }
    return !props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation.</div>
      : !props.isGeolocationEnabled
        ? <div>Geolocation is not enabled.</div>
        : props.coords
          ? <div>
	            You are at <span className="coordinate">{formatDegrees(props.coords.latitude, false)}</span>, <span className="coordinate">{formatDegrees(props.coords.longitude, true)}</span><br/>
	            Latitude: <span className="coordinate">{props.coords.latitude}</span><br/>
	            Longitude: <span className="coordinate">{props.coords.longitude}</span>
	            {
	              props.coords.altitude
	                ? <span>, approximately {props.coords.altitude} meters above sea level</span>
	                : null
	            }.
	         </div>
          : <div>Getting the location data&hellip;</div>;
  }
}

GeoComponent.propTypes = { ...GeoComponent.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(GeoComponent);