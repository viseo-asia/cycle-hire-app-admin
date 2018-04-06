import React from 'react';
import {IconButton, IconMenu, MenuItem} from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import iconMenu from "./theme";

const StationsIconMenu = () =>
    (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            iconStyle={iconMenu.icon}
        >
            <MenuItem primaryText="Top 5" />
            <MenuItem primaryText="Top 10" />
            <MenuItem primaryText="Top 20" />
        </IconMenu>
    );
export default StationsIconMenu;