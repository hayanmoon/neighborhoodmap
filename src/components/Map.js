import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 14.550973, lng: 121.05012 }}
    >
      {props.locations.map((location, index) => {
        return (
          <Marker
            animation={location.animation}
            onClick={()=> props.onItemClick(location.value)}
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
          />
        )
      })}
    </GoogleMap>
  ))
)

export default Map
