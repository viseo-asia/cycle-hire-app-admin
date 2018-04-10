import React, { Component } from 'react';
import {Bar, BarChart, XAxis, YAxis} from "recharts";
import theme from './theme';
import './style.css';
import {Paper, RaisedButton} from "material-ui";
import StationsIconMenu from "./components/StationsIconMenu";
import PropTypes from 'prop-types';

const data = [
    {name: 'Craven', uv: 30011, pv: 1398, amt: 2210},
    {name: 'William IV', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Northumberland Avenue', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Union Street', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Lorem', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Craven Street', uv: 30011, pv: 1398, amt: 2210},
    {name: 'William IV Street', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Northumberland Avenue Street', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Union Street 1', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Lorem Street', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Craven 1', uv: 30011, pv: 1398, amt: 2210},
    {name: 'William IV 2', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Northumberland Avenue 3', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Union Street 4', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Lorem 5', uv: 1890, pv: 4800, amt: 2181}
];

const _chardWidthHandler = () => {
    if (window.innerWidth >= 992)
        return window.innerWidth - 650;
    return window.innerWidth - 70
};

class StationChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 5
        }
    }

    _handleTopChartChange = (value) => this.setState({ size: value });

    render() {
        const { containerStyle, paperStyle, chartHeight } = this.props;
        return (
            <div className="station-chart-container container clearfix" style={containerStyle}>
                <Paper zDepth={1} style={Object.assign({}, theme.paper, paperStyle)}>
                    <div className="row">
                        <div className="title col-10">
                            Most used stations
                        </div>
                        <div className="col-2">
                            <StationsIconMenu onValueChange={this._handleTopChartChange.bind(this)}/>
                        </div>
                    </div>

                    <div className="bar-chart-container">
                        <BarChart
                            width={_chardWidthHandler()}
                            height={chartHeight}
                            data={data.slice(0, this.state.size)}
                            layout="vertical"
                            barSize={20}
                            barCategoryGap={5}
                            margin={{ top: 0, bottom: 0 }}
                        >
                            <XAxis hide={true}/>
                            <YAxis type="category" dataKey="name" />
                            <Bar dataKey="uv" fill="#48b5de" />
                        </BarChart>
                    </div>

                    <div className="map-button-container clearfix">
                        <RaisedButton
                            label="Map"
                            buttonStyle={theme.raisedButton}
                            labelColor={theme.raisedButton.textColor}
                            className="float-right"
                        />
                    </div>

                </Paper>
            </div>
        )
    }
}

StationChart.propTypes = {
    containerStyle: PropTypes.object,
    paperStyle: PropTypes.object,
    chartHeight: PropTypes.number
};

export default StationChart;