import React, { Component } from 'react';
import MapLayout from "./MapLayoutComponent";
import PropTypes from 'prop-types';

const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCac4KiePeteNK02OJTgHWGtBEvMAWGL5M&v=3.exp&libraries=geometry,drawing,places"
// const mapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

class GoogleMapHandler extends Component {
    render() {
        return (
            <MapLayout
                googleMapURL={mapUrl}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: !!this.props.containerHeight ? this.props.containerHeight : `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                markers={
                    [
                        {
                            position: {
                                lat: -34.397, lng: 150.644
                            }
                        },
                        {
                            position: {
                                lat: -34.397, lng: 150.644
                            }
                        },
                        {
                            position: {
                                lat: -34.4992406, lng: 150.664621
                            }
                        }
                    ]
                }
            />
        )
    }
}

GoogleMapHandler.propTypes = {
    containerHeight: PropTypes.number
};

export default GoogleMapHandler;