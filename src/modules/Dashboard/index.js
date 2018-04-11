import React, { Component } from 'react';
import './theme/style.css';
import FilterForm from "./components/stateless/FilterForm";
import StationChart from "./components/stateless/StationsChart";
import WeatherBicycleUsage from "./components/stateless/WeatherBicycleUsage";
import {FlatButton} from "material-ui";
import GoogleMapHandler from "../../components/stateful/GoogleMapHandler";

const dataSource = [
    {id: 1, name: 'Craven', rainfall: 25011, bike_usage: 1398, temperature: 2210},
    {id: 2, name: 'William IV', rainfall: 3300, bike_usage: 1398, temperature: 2210},
    {id: 3, name: 'Northumberland Avenue', rainfall: 2000, bike_usage: 9800, temperature: 2290},
    {id: 4, name: 'Union Street', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {id: 5, name: 'Lorem', rainfall: 1890, bike_usage: 4800, temperature: 2181},
    {id: 6, name: 'Craven Street', rainfall: 37011, bike_usage: 1398, temperature: 2210},
    {id: 7, name: 'William IV Street', rainfall: 2200, bike_usage: 1398, temperature: 2210},
    {id: 8, name: 'Northumberland Avenue Street', rainfall: 2000, bike_usage: 9800, temperature: 2290},
    {id: 9, name: 'Union Street 1', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {id: 10, name: 'Lorem Street', rainfall: 1190, bike_usage: 4800, temperature: 2181},
    {id: 11, name: 'Craven 1', rainfall: 30511, bike_usage: 1398, temperature: 2210},
    {id: 12, name: 'William IV 2', rainfall: 3330, bike_usage: 1398, temperature: 2210},
    {id: 13, name: 'Northumberland Avenue 3', rainfall: 2000, bike_usage: 5800, temperature: 2290},
    {id: 14, name: 'Union Street 4', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {id: 15, name: 'Lorem 5', rainfall: 1890, bike_usage: 4800, temperature: 2181}
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