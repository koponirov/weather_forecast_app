import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import s from './Header.module.css'

const Header = () => {
    return (
        <AppBar position="static" className={s.header_container}>
            <Toolbar>
                <Typography variant="h3">
                    Weather forecast
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;