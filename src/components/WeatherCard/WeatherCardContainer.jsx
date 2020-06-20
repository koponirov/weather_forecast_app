import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import React from "react";
import {CURRENT_WEATHER} from "../../queries"
import WeatherCard from "./WeatherCard";
import s from './WeatherCard.module.css'
import {getCityName, getCurrentCityWeather, getCurrentTemperature} from "../../selectors";
import Preloader from "../Preloader/Preloader";
import Typography from "@material-ui/core/Typography";

const WeatherCardContainer = inject("store")(observer(({ store }) => {

    const city = store.currentCity;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    if (loading) return <Preloader/>
    if (error) return (
        <Typography variant="h6" color="textSecondary" className={s.container}>
            Invalid city name or connection problem</Typography>);

    const tempC = getCurrentTemperature(data);
    const name = getCityName(data);
    const weather = getCurrentCityWeather(data);

    return (
        <WeatherCard tempC={tempC} name={name} weather={weather} store={store} />
    )
}));

export default WeatherCardContainer;
