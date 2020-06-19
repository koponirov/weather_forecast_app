import React from 'react';
import {compose} from "recompose";
import {NavLink, withRouter} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {DETAILED_WEATHER} from "../queries";
import { format } from 'date-fns'
import {zonedTimeToUtc} from "date-fns-tz";
import Back from "./Back";
import DateRow from "./DateRow";

const CurrentDateWeather = ({ line }) => {

    const utcDate = zonedTimeToUtc(line.dt_txt, 'UTC+00:00')

    const date = format(utcDate,"EEEE (d.MM) HH:mm")

    const temp = (line.main.temp_c).toFixed(1)

    const weather = line.weather[0].main

    return( <DateRow date={date} temp={temp} weather={weather}/>


        // <div>
        //     <span>{date}</span>
        //     <span>{temp}&#8451;</span>
        //     <span>{weather}</span>
        // </div>

    )
};

const City = (props) => {

    const city = props.match.params.cityName;

    const { loading, error, data } = useQuery(DETAILED_WEATHER, {
        variables: { city },
    });

    if (!data) return <p>Loading....</p>

    console.log(data)

    const lineItem = data.getWeather.list.map(
        line=><CurrentDateWeather key={line.dt} line={line}/>);



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