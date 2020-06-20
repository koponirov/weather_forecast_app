import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";


export default function DateRow({date, tempC, weather}) {

    return (<List>
            <ListItem>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">{date}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h6"
                                    color='textSecondary'
                                    align='left'
                        >{tempC} &#8451;</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="h6"
                                    align='left'
                        >{weather}</Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
        </List>

    )
}
