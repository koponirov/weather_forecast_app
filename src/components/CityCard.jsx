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
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    // console.log(props.store.currentCity)

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.data.getCurrentWeather.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.data.getCurrentWeather.main.temp_c}&#8451;
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        {props.data.getCurrentWeather.weather[0].main}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to favorites</Button>
                </CardActions>
            </Card>
        </div>


    );
}