import React, { Component } from 'react';
import './theme/style.css';
import FilterForm from "./components/stateless/FilterForm";
import StationChart from "./components/stateless/StationsChart";
import WeatherBicycleUsage from "./components/stateless/WeatherBicycleUsage";
import {FlatButton} from "material-ui";
import GoogleMapHandler from "../../components/stateful/GoogleMapHandler";
import dataSource from "./dataSource.json";

export default class DashboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            area: "London",
            station: "AllStations",
            openFilter: true,
            data: dataSource
        }
    }

    _handleAreaChange = (event, index, area) => this.setState({ area });
    _handleStationChange = (event, index, station) => this.setState({ station });
    _openFilterHandler = (openFilter) => this.setState({ openFilter: !openFilter });
    onDataChangeHandler = (size) => this.setState({ data: dataSource.slice(0, size) });

    render() {
        const { area, station, openFilter, data } = this.state;

        return (
            <div className="dashboard-container">
                <FlatButton
                    onClick={this._openFilterHandler.bind(this, openFilter)}
                    label="Filters"
                    fullWidth={true}
                    style={{ borderRadius: 0, color: '#ffffff', paddingLeft: 15 }}
                    backgroundColor="#233672"
                    rippleColor="#233672"
                    hoverColor="#233672"
                    className="filter-form-button"
                />
                <div className={ !!openFilter ? "active-filter" : "inactive-filter"}>
                    {
                        !!openFilter ?
                            <FilterForm
                                area={{
                                    default: area, item: [],
                                    onChangeHandler: this._handleAreaChange.bind(this)
                                }}
                                station={{
                                    default: station, item: [],
                                    onChangeHandler: this._handleStationChange.bind(this)
                                }}
                            />
                            :
                            null
                    }
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 chart-container">
                        <StationChart
                            data={data}
                            onSizeChange={this.onDataChangeHandler.bind(this)}
                            paperStyle={{ height: window.innerHeight / 2 }}
                        />
                        <WeatherBicycleUsage
                            data={data}
                            paperStyle={{ height: window.innerHeight / 2}}
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 dashboard-map-container">
                        <GoogleMapHandler containerHeight={window.innerHeight} />
                    </div>
                </div>
            </div>
        )
    }
}