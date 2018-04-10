import React, { Component } from 'react';
import {Bar, BarChart, LabelList, XAxis, YAxis} from "recharts";
import theme from './theme';
import './style.css';
import {Paper, RaisedButton} from "material-ui";
import StationsIconMenu from "./components/StationsIconMenu";
import PropTypes from 'prop-types';

const _chardWidthHandler = () => {
    if (window.innerWidth > 1440){
        return window.innerWidth - 950;
    }
    if (window.innerWidth >= 992 && window.innerWidth <= 1440) {
        return window.innerWidth - 650;
    }
    return window.innerWidth - 70
};

class StationChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 5
        }
    }

    _handleTopChartChange = (value) => {
        this.setState({ size: value });
        this.props.onSizeChange(value);
    };

    render() {
        const { containerStyle, paperStyle, chartHeight, data } = this.props;
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
                            margin={{ top: 5, right: 5, bottom: 5, left: 90 }}
                        >
                            <XAxis hide={true}/>
                            <YAxis type="category" dataKey="name" />
                            <Bar dataKey="rainfall" fill="#48b5de">
                                <LabelList dataKey="rainfall" style={{ fontSize: 12}} />
                            </Bar>

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
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        rainfall: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired
    })),
    onSizeChange: PropTypes.func,
    containerStyle: PropTypes.object,
    paperStyle: PropTypes.object,
    chartHeight: PropTypes.number
};

export default StationChart;