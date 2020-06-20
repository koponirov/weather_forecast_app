import React from "react";
import {inject, observer} from "mobx-react";
import {useQuery} from "@apollo/react-hooks";
import {CURRENT_WEATHER} from "../../queries";
import {NavLink} from "react-router-dom";
import Row from "../Row";
import Back from "../Back";
import List from '@material-ui/core/List';
import {getCurrentCityWeather, getCurrentTemperature} from "../../selectors";
import Typography from "@material-ui/core/Typography";
import Preloader from "../Preloader/Preloader";


const ListItem = ({city, store}) => {

    const {loading, error, data} = useQuery(CURRENT_WEATHER, {
        variables: {city},
    });

    if (loading || !data) return <Preloader/>;
    if (error) return <Typography variant="h6" color="textSecondary">{error.message}</Typography>;


    const path = `/city/${city}`;
    const tempC = getCurrentTemperature(data);
    const weather = getCurrentCityWeather(data);

    return <Row city={city} store={store}
                tempC={tempC} path={path} weather={weather}/>
};

const ListComponent = inject("store")(observer(({ store }) => {

    return (
        <div>
            <div>
                <NavLink to={'/search'}>
                    <Back/>
                </NavLink>
                <Typography variant="h2"
                            align='center'
                            gutterBottom='true'
                >Favorite cities
                </Typography>
            </div>

            {store.favoriteCitiesList.length > 0 ?
                <List>
                    {store.favoriteCitiesList.map(city => <ListItem key={city} city={city} store={store}/>)}
                </List> :
                <Typography variant="h5"
                            color="textSecondary"
                            align='center'
                            gutterBottom='true'
                >favorite cities not added yet,
                    go back to Search
                </Typography>
            }
        </div>
    )


}));

export default ListComponent;

