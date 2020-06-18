import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import React from "react";
import {CURRENT_WEATHER} from "../queries"
import WeatherCard from "./WeatherCard";

const WeatherCardContainer = inject("store")(observer(({ store }) => {

    const city = store.currentCity;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Invalid city name or connection problem</p>;

    console.log(data);

    return (
        <WeatherCard data={data} store={store} />
    )
}));

export default WeatherCardContainer;
