import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './WeatherCard.module.css'
import {observer} from "mobx-react";
import Fade from '@material-ui/core/Fade';

const WeatherCard = observer(({tempC, name, weather, store}) => {

    const addToFavList = (city) => {

        if (store.favoriteCitiesList.some(favCity => favCity === city)) {
            return
        } else {
            store.addCityToFavorites(city)
        }
    };

    return (
        <div className={s.container}>

            <Card className={s.card}>
                <CardContent>
                    <Typography variant="h2"
                                align='center'
                                gutterBottom='true'
                    >{name}
                    </Typography>
                    <Typography variant="h4"
                                align='center'
                                gutterBottom='true'
                    >{tempC} &#8451;
                    </Typography>
                    <Typography color="textSecondary"
                                variant="h4"
                                align='center'
                    >{weather}
                    </Typography>
                </CardContent>
                <CardActions className={s.container}>
                    {
                        (store.favoriteCitiesList.some(favCity => favCity === store.currentCity)) ?
                            <Typography variant="h6" color="textSecondary" className={s.container}>
                                this city is already in favorites</Typography> :
                            <Button size="small"
                                    color="primary"
                                    align='center'
                                    onClick={() => addToFavList(store.currentCity)}
                            >Add to favorites</Button>
                    }
                </CardActions>
            </Card>

        </div>
    );
});

export default WeatherCard;