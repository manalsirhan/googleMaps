import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";


const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap
            defaultZoom={14}
                defaultCenter={{ lat: 31.2519153, lng: 34.7602093}}
        >
        </GoogleMap>
        )
    )
)


export default class Map extends React.Component {
    render() {
        return (
            <div>
                <h1>My google map</h1>
                <MyGoogleMap
                    loadingElement={<div>Loading....</div>}
                    containerElement={<div style={{height: '100%'}} className="map"></div>}
                    mapElement={<div style={{height: '1000px'}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"

                />
            </div>
        )
    }
}
