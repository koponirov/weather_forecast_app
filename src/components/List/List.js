import React from "react";
import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import {CURRENT_WEATHER} from "../../queries";
import {NavLink} from "react-router-dom";
import Row from "../Row";
import Back from "../Back";
import List from '@material-ui/core/List';


const ListItem = ({city, store}) => {

    const {loading, error, data} = useQuery(CURRENT_WEATHER, {
        variables: {city},
    });

    if (loading||!data) return <p>Loading...</p>

    const path = `/city/${city}`;

    console.log(data)

    const temp = (data.getCurrentWeather.main.temp_c).toFixed(1);

    const weather = data.getCurrentWeather.weather[0].main




    return  <Row city={city} store={store}
                          temp={temp} path={path} weather={weather}/>




};

const ListComponent = inject("store")(observer(({store}) => {

    return (
        <div>
            <div>
                <NavLink to={'/main'}>
                    <Back/>
                </NavLink>
                <h1>favorite cities</h1>
            </div>
            {store.favoriteCitiesList.length>0?
                <List>
                    {store.favoriteCitiesList.map(city => <ListItem key={city} city={city} store={store}/>)}
                </List>:
                <p>No cities into favorites yet</p>
            }


        </div>
    )


}));

export default ListComponent;

