import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

const Map = (props) => {
    return (
        <GoogleMap 
            defaultZoom={13}
            defaultCenter={{ lat: 41.89615758803039, lng: -87.62422059020913 }}
        >
            <Marker key={3322} position={{ lat: 41.89615758803039, lng: -87.62422059020913 }}/>
        </GoogleMap>
    )
}

export default withScriptjs (
    withGoogleMap(Map)
)
