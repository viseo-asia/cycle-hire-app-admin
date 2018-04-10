import React, { Component } from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
import PinModal from "./components/PinModal";
import pinImage from "./assets/pinPoint.png";
import axios from 'axios';

class MapLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dataSource: []
        }
    }

    componentWillMount() {
        this.getBikepoints();
    }

    getBikepoints = () => {
        axios.get('https://tajz77isu1.execute-api.us-east-1.amazonaws.com/dev/bikepoint', {
            responseType: 'json'
        })
        .then(response => {
            // console.log(response.data);
            this.setState({ dataSource: response.data });

        })
        .catch(error => {
            console.log('===error===');
            console.log(error);
        });
    };

    _openPinHandler = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const { isOpen, dataSource } = this.state;

        return (
            <div>
                <PinModal
                    isOpen={isOpen}
                    toggleHandler={this._openPinHandler}
                    title={"Craven Street, Strand 13 bikes • 8 spaces"}
                />
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={{ lat: 51.529163, lng: -0.10997 }}
                >
                    {
                        // markers.map((marker, index) =>
                        dataSource.map((marker, index) =>
                            <div key={index}>
                                <Marker
                                    position={{ lat: marker.lat, lng: marker.lon}}
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

// MapLayout.propTypes = {
//     markers: PropTypes.arrayOf(PropTypes.shape({
//         position: PropTypes.shape({
//             lat: PropTypes.number.isRequired,
//             lng: PropTypes.number.isRequired
//         })
//     }))
// };

export default withScriptjs(withGoogleMap(MapLayout));