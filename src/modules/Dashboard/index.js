import React, { Component } from 'react';
import './theme/style.css';
import FilterForm from "./components/stateless/FilterForm";
import StationChart from "./components/stateless/StationsChart";
import WeatherBicycleUsage from "./components/stateless/WeatherBicycleUsage";
import {FlatButton} from "material-ui";
import GoogleMapHandler from "../../components/stateful/GoogleMapHandler";

const dataSource = [
    {id: 1, name: 'Craven', rainfall: 2100, bike_usage: 3600, temperature: 5200},
    {id: 2, name: 'William IV', rainfall: 2200, bike_usage: 3700, temperature: 5300},
    {id: 3, name: 'Northumberland Avenue', rainfall: 2300, bike_usage: 3900, temperature: 5400},
    {id: 4, name: 'Union Street', rainfall: 2400, bike_usage: 4000, temperature: 5500},
    {id: 5, name: 'Lorem', rainfall: 2500, bike_usage: 4100, temperature: 5600},
    {id: 6, name: 'Craven Street', rainfall: 2600, bike_usage: 4200, temperature: 5700},
    {id: 7, name: 'William IV Street', rainfall: 2700, bike_usage: 4300, temperature: 5800},
    {id: 8, name: 'Northumberland Avenue Street', rainfall: 2800, bike_usage: 4400, temperature: 5900},
    {id: 9, name: 'Union Street 1', rainfall: 2900, bike_usage: 4500, temperature: 6000},
    {id: 10, name: 'Lorem Street', rainfall: 3000, bike_usage: 4600, temperature: 6100},
    {id: 11, name: 'Craven 1', rainfall: 3100, bike_usage: 4700, temperature: 6200},
    {id: 12, name: 'William IV 2', rainfall: 3200, bike_usage: 4800, temperature: 6300},
    {id: 13, name: 'Northumberland Avenue 3', rainfall: 3300, bike_usage: 4900, temperature: 6400},
    {id: 14, name: 'Union Street 4', rainfall: 3400, bike_usage: 5000, temperature: 6500},
    {id: 15, name: 'Lorem 5', rainfall: 3500, bike_usage: 5100, temperature: 6600}
];

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