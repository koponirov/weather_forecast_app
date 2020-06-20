import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import {Link, NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";

const useStyles = makeStyles({
    bold: {
        fontWeight: 'bold',
    },
});


export default function Row({city, tempC, weather, path, store}) {
    const classes = useStyles();

    return (<List>
            <ListItem button component={Link} to={path}>
                <Grid container spacing={0}>
                    <Grid item xs={6} sm={3}>
                        <ListItemText classes={{primary: classes.bold}} primary={city}/>
                    </Grid>
                    <Grid item xs={6} sm={3}>{tempC} &#8451;</Grid>
                    <Grid item xs={6} sm={3}>{weather}</Grid>
                </Grid>
                <ListItemSecondaryAction>
                    <IconButton aria-label="delete" onClick={() => store.removeCityFromFavorites(city)}>
                        <Delete fontSize="small"/>
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
            <Divider/>
        </List>

    )
}
