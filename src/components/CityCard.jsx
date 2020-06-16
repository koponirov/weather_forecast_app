import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container:{
        display: 'flex',
        justifyContent: 'center',
    },
    root: {
        minWidth: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 4,
    },
});

export default function CityCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardContent className={classes.root}>
                    <Typography variant="h2" component="span">
                        {props.data.getCurrentWeather.name}
                    </Typography>
                    <Typography variant="h4" component="h2">
                        {props.data.getCurrentWeather.main.temp_c}&#8451;
                    </Typography>

                    <Typography className={classes.pos}
                                color="textSecondary"
                                variant="h4"
                    >
                        {props.data.getCurrentWeather.weather[0].main}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Add to favorites</Button>
                </CardActions>
            </Card>
        </div>


    );
}