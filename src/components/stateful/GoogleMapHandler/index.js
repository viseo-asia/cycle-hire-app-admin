import React, { Component } from 'react';
import MapLayout from "./MapLayoutComponent";

export default class GoogleMapHandler extends Component {
    render() {
        return (
            <MapLayout
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
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