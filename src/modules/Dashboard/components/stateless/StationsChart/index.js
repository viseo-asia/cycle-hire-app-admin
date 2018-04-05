import React from 'react';
import {Bar, BarChart, XAxis, YAxis} from "recharts";
import theme from './theme';
import './style.css';
import {Paper, RaisedButton} from "material-ui";
import StationsIconMenu from "./components/StationsIconMenu";

const data = [
    {name: 'Craven', uv: 30011, pv: 1398, amt: 2210},
    {name: 'William IV', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Northumberland Avenue', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Union Street', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Lorem', uv: 1890, pv: 4800, amt: 2181}
];

const StationChart = () => (
    <div className="station-chart-container container clearfix">
        <Paper zDepth={1} style={theme.paper}>
            <div className="row">
                <div className="title col-10">
                    Most used stations
                </div>
                <div className="col-2">
                    <StationsIconMenu/>
                </div>
            </div>

            <BarChart
                width={window.innerWidth - 70}
                height={200}
                data={data}
                layout="vertical"
                barSize={30}
                barCategoryGap={20}

            >
                <XAxis hide={true}/>
                <YAxis type="category" dataKey="name" />
                <Bar dataKey="uv" fill="#48b5de" />
            </BarChart>

            <div className="map-button-container">
                <RaisedButton
                    label="Map"
                    buttonStyle={theme.raisedButton}
                    labelColor={theme.raisedButton.textColor}
                    className="float-right"
                />
            </div>

        </Paper>
    </div>
);

export default StationChart;