import React from "react";
import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import {CURRENT_WEATHER} from "../../queries";
import {NavLink} from "react-router-dom";


const ListItem = ({city, store}) => {

    const {loading, error, data} = useQuery(CURRENT_WEATHER, {
        variables: {city},
    });

    const path = `/city/${city}`


    return (

        <div className='item'>
            <NavLink to={path}>
                <div className='item'>
                    <span>{city}</span>
                    <span>{data.getCurrentWeather.main.temp_c}</span>
                    <span>{data.getCurrentWeather.weather[0].main}</span>
                </div>
            </NavLink>
            <button onClick={() => store.removeCityFromFavorites(city)}>delete</button>
        </div>


    )
};

const List = inject("store")(observer(({store}) => {

    return (
        <div>
            <NavLink to={'/main'}>
                <button>back to search</button>
            </NavLink>
            {store.favoriteCitiesList.map(city => <ListItem key={city} city={city} store={store}/>)}
        </div>
    )


}));

export default List;

