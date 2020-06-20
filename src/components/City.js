import React from 'react';
import { compose } from "recompose";
import { NavLink, withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { DETAILED_WEATHER } from "../queries";
import Back from "./Back";
import DateRow from "./DateRow";
import { getCityWeather, getDate, getTemperature } from "../selectors";

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

    if (!data) return <p>Loading....</p>

    const lineItem = data.getWeather.list.map(
        data => <CurrentDateWeather key={data.dt} data={data}/>);

    return (
        <div>
            <NavLink to={'/list'}>
                <Back/>
            </NavLink>
            <h1>{city}</h1>
            <div>{lineItem}</div>
        </div>
    )
};

export default compose(withRouter)(City);