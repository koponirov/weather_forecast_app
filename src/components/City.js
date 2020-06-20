import React from 'react';
import { compose } from "recompose";
import { NavLink, withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { DETAILED_WEATHER } from "../queries";
import Back from "./Back";
import DateRow from "./DateRow";
import { getCityWeather, getDate, getTemperature } from "../selectors";
import Typography from "@material-ui/core/Typography";
import Preloader from "./Preloader/Preloader";
import s from "./WeatherCard/WeatherCard.module.css";

const CurrentDateWeather = ({data}) => {

    const date = getDate(data);

    const tempC = getTemperature(data);

    const weather = getCityWeather(data);

    return <DateRow date={date} tempC={tempC} weather={weather}/>
};

const City = (props) => {

    const city = props.match.params.cityName;

    const {loading, error, data} = useQuery(DETAILED_WEATHER, {
        variables: {city},
    });

    if (loading) return <Preloader/>;
    if (error) return (
        <Typography variant="h6" color="textSecondary" className={s.container}>
            Invalid city name or connection problem</Typography>);

    const lineItem = data.getWeather.list.map(
        data => <CurrentDateWeather key={data.dt} data={data}/>);

    return (
        <div>
            <NavLink to={'/list'}>
                <Back/>
            </NavLink>
            <Typography variant="h2"
                        align='center'
                        gutterBottom='true'
            >{city}
            </Typography>
            <Typography variant="h5"
                        color="textSecondary"
                        align='center'
                        gutterBottom='true'
            >Detailed hourly forecast for the next 5 days:
            </Typography>
            <div>{lineItem}</div>
        </div>
    )
};

export default compose(withRouter)(City);