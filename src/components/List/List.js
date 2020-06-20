import React from "react";
import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import {CURRENT_WEATHER} from "../../queries";
import {NavLink} from "react-router-dom";
import Row from "../Row";
import Back from "../Back";
import List from '@material-ui/core/List';
import {getCurrentCityWeather, getCurrentTemperature} from "../../selectors";


const ListItem = ({city, store}) => {

    const {loading, error, data} = useQuery(CURRENT_WEATHER, {
        variables: {city},
    });

    if (loading || !data) return <p>Loading...</p>

    const path = `/city/${city}`;
    const tempC = getCurrentTemperature(data);
    const weather = getCurrentCityWeather(data);

    return <Row city={city} store={store}
                temp={tempC} path={path} weather={weather}/>

};

const ListComponent = inject("store")(observer(({ store }) => {

    return (
        <div>
            <div>
                <NavLink to={'/search'}>
                    <Back/>
                </NavLink>
                <h1>favorite cities</h1>
            </div>

            {store.favoriteCitiesList.length > 0 ?
                <List>
                    {store.favoriteCitiesList.map(city => <ListItem key={city} city={city} store={store}/>)}
                </List> :
                <p>No cities into favorites yet</p>
            }
        </div>
    )


}));

export default ListComponent;

