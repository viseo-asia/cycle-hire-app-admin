import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { bool, func } from 'prop-types';
import theme from './theme';
import { Link } from "react-router-dom";

export default class HeaderDrawer extends Component {

    static defaultProps = {
        isOpen: bool.isRequired,
        toggleDrawer: func.isRequired
    };

    render() {

        const { isOpen, toggleDrawer } = this.props;

        return (
            <Drawer
                open={isOpen}
                docked={false}
                onRequestChange={() => toggleDrawer(isOpen)}
            >
                <MenuItem
                    onClick={() => toggleDrawer(isOpen)}
                    style={theme.menuItem}
                >
                    Close Menu
                </MenuItem>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
                <MenuItem>Menu Item 4</MenuItem>
                <MenuItem>
                    <Link to="/">Log Out</Link>
                </MenuItem>
            </Drawer>
        )
    }
}