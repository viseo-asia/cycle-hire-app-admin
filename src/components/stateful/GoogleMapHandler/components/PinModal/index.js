import React from 'react';
import {CircularProgress, Dialog} from "material-ui";
import PropTypes from 'prop-types';
import DockingGraph from "../DockingGraph";

const PinModal = ({ isOpen, toggleHandler, title }) =>
    (
        <Dialog
            modal={false}
            open={isOpen}
            onRequestClose={toggleHandler}
        >
            <div>
                <div className="row">
                    <div className="col-10">
                        <h1 style={{ color: "#13378f", fontSize: 18 }}>{title}</h1>
                        <span style={{ color: "#48b5de", fontSize: 14 }}>13 bikes * 8 spaces</span>
                    </div>
                    <div className="col-2">
                        <CircularProgress
                            mode="determinate"
                            value={80}
                            size={55}
                            thickness={5}
                            style={{ marginRight: 10 }}
                        />
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <DockingGraph chartHeight={(window.innerHeight / 2) - 100} paperStyle={{ height: window.innerHeight / 2}} />
                </div>
            </div>
            {/*<div style={{ marginTop: 10 }}>*/}
                {/*The actions in this window were passed in as an array of React objects.*/}
            {/*</div>*/}
        </Dialog>
    );

PinModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleHandler: PropTypes.func.isRequired
};

export default PinModal;