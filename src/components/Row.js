import React from 'react';
import {IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";


export default function Row({city, tempC, weather, path, store}) {

    return (<List>
            <ListItem button component={Link} to={path}>
                <Grid container spacing={0}>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h5">{city}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h6" color="textSecondary">{tempC} &#8451;</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h6">{weather}</Typography>
                    </Grid>
                </Grid>
                <ListItemSecondaryAction>
                    <IconButton aria-label="delete"
                                onClick={() => store.removeCityFromFavorites(city)}>
                        <Delete fontSize="small"/>
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
            <Divider/>
        </List>

    )
}
