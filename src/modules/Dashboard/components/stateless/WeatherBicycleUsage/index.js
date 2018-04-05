import React from 'react';
import {Area, Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis} from "recharts";
import theme from './theme';
import './style.css';
import {Paper} from "material-ui";
import StationsIconMenu from "./components/StationsIconMenu";

const data = [
    {name: 'Craven', uv: 3011, pv: 1398, amt: 2210},
    {name: 'William IV', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Northumberland Avenue', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Union Street', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Lorem', uv: 1890, pv: 4800, amt: 2181}
];

const WeatherBicycleUsage = () => (
    <div className="station-chart-container container clearfix">
        <Paper zDepth={1} style={theme.paper}>
            <div className="row">
                <div className="title col-10">
                    Weather VS Bicycle usage
                </div>
                <div className="col-2">
                    <StationsIconMenu/>
                </div>
            </div>

            <ComposedChart width={window.innerWidth - 70} height={150} data={data}>
                <XAxis hide={true} />
                <YAxis hide={true} />
                <Legend verticalAlign="top" height={36}/>
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#ffba00" stroke="#FFC142" />
                <Bar dataKey="uv" barSize={20} fill="#48b5de" />
                <Line type="monotone" dataKey="pv" fill="#fffff" stroke="#283f89" />
            </ComposedChart>
        </Paper>
    </div>
);

export default WeatherBicycleUsage;