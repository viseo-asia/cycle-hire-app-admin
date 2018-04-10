import React, { Component } from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
import PropTypes from 'prop-types';
import PinModal from "./components/PinModal";
import pinImage from "./assets/pinPoint.png";

class MapLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    _openPinHandler = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const { markers } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <PinModal
                    isOpen={isOpen}
                    toggleHandler={this._openPinHandler}
                    title={"Craven Street, Strand 13 bikes • 8 spaces"}
                />
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                >
                    {
                        markers.map((marker, index) =>
                            <div>
                                <Marker
                                    position={marker.position}
                                    key={index}
                                    icon={pinImage}
                                    onClick={this._openPinHandler.bind(this)}
                                />
                            </div>
                        )
                    }
                </GoogleMap>
            </div>
        )
    }
}

MapLayout.propTypes = {
    markers: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        })
    }))
};

export default withScriptjs(withGoogleMap(MapLayout));