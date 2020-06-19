import React from "react";
import FormContainer from "./Form/MyForm";
import WeatherCardContainer from "./WeatherCardContainer";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';






const Main = () => {

    return (
        <div>
            <FormContainer/>
            <WeatherCardContainer/>
        </div>

    )
};

export default Main;