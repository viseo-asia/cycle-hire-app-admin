import React, { Component } from 'react';
import MapLayout from "./MapLayoutComponent";
import PropTypes from 'prop-types';

class GoogleMapHandler extends Component {
    render() {
        return (
            <MapLayout
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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