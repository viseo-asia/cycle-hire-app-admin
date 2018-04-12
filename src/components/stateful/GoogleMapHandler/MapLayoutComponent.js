import React, { Component } from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import pinImage from "./assets/pinPoint.png";
import axios from "axios";
import PropTypes from "prop-types";
import {Snackbar} from "material-ui";

class MapLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
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


    render() {
        const { isLoading, dataSource } = this.state;
        const { onMarkerClusterClick, onMarkerClick } = this.props;

        return (
            <div>
                <Snackbar
                    open={isLoading}
                    message="Fetching bikepoint information."
                    onRequestClose={() => isLoading}
                    bodyStyle={{ backgroundColor: "#48b5de" }}
                />
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={{ lat: 51.529163, lng: -0.10997 }}
                >
                    <MarkerClusterer
                        onClick={(markerCluster) => onMarkerClusterClick(markerCluster)}
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                    >
                    {
                        dataSource.map((marker, index) =>
                            <Marker
                                key={index}
                                position={{ lat: marker.lat, lng: marker.lon}}
                                icon={pinImage}
                                onClick={(markerData) => onMarkerClick(Object.assign({}, markerData, marker))}
                            />
                        )
                    }
                    </MarkerClusterer>
                </GoogleMap>
            </div>
        )
    }
}

MapLayout.propTypes = {
    onMarkerClick: PropTypes.func,
    onMarkerClusterClick: PropTypes.func
};

export default withScriptjs(withGoogleMap(MapLayout));