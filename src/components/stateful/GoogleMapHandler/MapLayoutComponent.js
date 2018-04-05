import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
import PropTypes from 'prop-types';
const MapLayout = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {
            props.markers.map((marker, index) => <Marker position={marker.position} key={index} />)
        }
    </GoogleMap>
));

MapLayout.propTypes = {
    markers: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        })
    }))
};

export default MapLayout;