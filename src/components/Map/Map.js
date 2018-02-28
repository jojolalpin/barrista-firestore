import React from 'react'
// import PropTypes from 'prop-types'
// import classes from './Map.scss'


// import ReactDOM from "react-dom"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

import {geolocated} from 'react-geolocated'

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBsdnP5kguPGrcp2J1vlFNZaXv6PdFLlp0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: '400px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
    isMarkerShown: true
  }),
  withScriptjs,
  withGoogleMap
)(props => {
    // console.log(props.coords);
    var defaultCoords = { lat: 48.864716, lng: 2.349014 } // Paris
    if (props.coords) {
      var userCoords = { lat: props.coords.latitude, lng: props.coords.longitude }
      return ( 
        <GoogleMap defaultZoom={16} defaultCenter={userCoords}>
          {props.isMarkerShown && (
            <Marker position={userCoords} />
          )}
        </GoogleMap>
      )
    } else {
      return (
        <GoogleMap defaultZoom={16} defaultCenter={defaultCoords}>
          {props.isMarkerShown && (
            <Marker position={defaultCoords} />
          )}
        </GoogleMap>
      )
    }
  }
)

// export default Map
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(Map)