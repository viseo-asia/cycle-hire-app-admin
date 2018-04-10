import React, { Component } from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
import PinModal from "./components/PinModal";
import pinImage from "./assets/pinPoint.png";
import axios from 'axios';
import {Snackbar} from "material-ui";

class MapLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isOpen: false,
            dataSource: []
        }
    }

    componentWillMount() {
        this.getBikepoints();
    }

    getBikepoints = () => {
        this.setState({ isLoading: true });
        axios.get('https://tajz77isu1.execute-api.us-east-1.amazonaws.com/dev/bikepoint', {
            responseType: 'json'
        })
        .then(response => {
            // console.log(response.data);
            this.setState({
                dataSource: response.data ,
                isLoading: false,
                commonName: null
            });

        })
        .catch(error => {
            alert(error)
        });
    };

    _openPinHandler = (commonName) => this.setState({ isOpen: !this.state.isOpen, commonName });

    render() {
        const { isOpen, isLoading, dataSource, commonName } = this.state;

        return (
            <div>
                <Snackbar
                    open={isLoading}
                    message="Fetching bikepoint information."
                    onRequestClose={() => isLoading}
                    bodyStyle={{ backgroundColor: "#48b5de" }}
                />
                <PinModal
                    isOpen={isOpen}
                    toggleHandler={this._openPinHandler}
                    title={commonName}
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
                                    onClick={this._openPinHandler.bind(this, marker.commonName)}
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