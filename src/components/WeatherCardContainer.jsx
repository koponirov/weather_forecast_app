import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import React from "react";
import {CURRENT_WEATHER} from "../queries"
import WeatherCard from "./WeatherCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import './App/App.css'
import {getCityName, getCurrentCityWeather, getCurrentTemperature} from "../selectors";

const WeatherCardContainer = inject("store")(observer(({ store }) => {

    const city = store.currentCity;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    if (loading) return <p className='form-container'><CircularProgress /></p>;
    if (error) return <p>Invalid city name or connection problem</p>;

    const tempC = getCurrentTemperature(data);
    const name = getCityName(data);
    const weather = getCurrentCityWeather(data)

    return (
        <WeatherCard tempC={tempC} name={name} weather={weather} store={store} />
    )
}));

export default WeatherCardContainer;
