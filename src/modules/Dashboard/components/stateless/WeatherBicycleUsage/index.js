import React from 'react';
import {Area, Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis} from "recharts";
import theme from './theme';
import './style.css';
import {Paper} from "material-ui";
import PropTypes from 'prop-types';

const _chardWidthHandler = () => {
    if (window.innerWidth >= 992)
        return window.innerWidth - 800;
    return window.innerWidth - 70
};

const WeatherBicycleUsage = ({ containerStyle, paperStyle, chartHeight, data }) => (
    <div className="station-chart-container container clearfix" style={containerStyle}>
        <Paper zDepth={1} style={Object.assign({}, theme.paper, paperStyle)}>
            <div className="row">
                <div className="title col-10">
                    Weather VS Bicycle usage
                </div>
                {/*<div className="col-2">*/}
                    {/*<StationsIconMenu/>*/}
                {/*</div>*/}
            </div>

            <div className="compose-chart-container">
                <ComposedChart
                    width={_chardWidthHandler()}
                    height={chartHeight}
                    data={data}
                >
                    <XAxis type="category" dataKey="bike_usage" />
                    <YAxis type="category" dataKey="temperature" />
                    <Legend verticalAlign="top" height={36}/>
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="temperature" fill="#ffba00" stroke="#FFC142" />
                    <Bar dataKey="rainfall" barSize={20} fill="#48b5de" />
                    <Line type="monotone" dataKey="bike_usage" fill="#fffff" stroke="#283f89" />
                </ComposedChart>
            </div>
        </Paper>
    </div>
);

WeatherBicycleUsage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        rainfall: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired
    })),
    containerStyle: PropTypes.object,
    paperStyle: PropTypes.object,
    chartHeight: PropTypes.number.isRequired
};

export default WeatherBicycleUsage;