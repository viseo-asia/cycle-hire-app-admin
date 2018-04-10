import React, { Component } from 'react';
import './theme/style.css';
import FilterForm from "./components/stateless/FilterForm";
import StationChart from "./components/stateless/StationsChart";
import WeatherBicycleUsage from "./components/stateless/WeatherBicycleUsage";
import {FlatButton} from "material-ui";
import GoogleMapHandler from "../../components/stateful/GoogleMapHandler";

const dataSource = [
    {name: 'Craven', rainfall: 30011, bike_usage: 1398, temperature: 2210},
    {name: 'William IV', rainfall: 3000, bike_usage: 1398, temperature: 2210},
    {name: 'Northumberland Avenue', rainfall: 2000, bike_usage: 9800, temperature: 2290},
    {name: 'Union Street', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {name: 'Lorem', rainfall: 1890, bike_usage: 4800, temperature: 2181},
    {name: 'Craven Street', rainfall: 30011, bike_usage: 1398, temperature: 2210},
    {name: 'William IV Street', rainfall: 3000, bike_usage: 1398, temperature: 2210},
    {name: 'Northumberland Avenue Street', rainfall: 2000, bike_usage: 9800, temperature: 2290},
    {name: 'Union Street 1', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {name: 'Lorem Street', rainfall: 1890, bike_usage: 4800, temperature: 2181},
    {name: 'Craven 1', rainfall: 30011, bike_usage: 1398, temperature: 2210},
    {name: 'William IV 2', rainfall: 3000, bike_usage: 1398, temperature: 2210},
    {name: 'Northumberland Avenue 3', rainfall: 2000, bike_usage: 9800, temperature: 2290},
    {name: 'Union Street 4', rainfall: 2780, bike_usage: 3908, temperature: 2000},
    {name: 'Lorem 5', rainfall: 1890, bike_usage: 4800, temperature: 2181}
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
                            chartHeight={(window.innerHeight / 2) - 100}
                            paperStyle={{ height: window.innerHeight / 2 }}
                        />
                        <WeatherBicycleUsage
                            data={data}
                            chartHeight={(window.innerHeight / 2) - 100}
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