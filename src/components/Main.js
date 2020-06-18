import React from "react";
import FormContainer from "./Form/MyForm";
import WeatherCardContainer from "./WeatherCardContainer";


const Main = () => {
    return (
        <div>
            <h1 className="header">Weather Forecast</h1>
            <FormContainer/>
            <WeatherCardContainer/>
        </div>

    )
};

export default Main;