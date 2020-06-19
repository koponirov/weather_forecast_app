import React from 'react';
import './App.css';
import Main from "./components/Main";
import {Redirect, Switch, Route} from "react-router-dom";
import ListComponent from "./components/List/List";
import City from "./components/City";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    container: {
        maxWidth: '80%',
        paddingTop: '15px'
    },
}));

function App() {

    const classes = useStyles();

    return (
        <section>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3">
                        Weather forecast
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={'/main'}/>}/>
                    <Route path='/main'
                           render={() => <Main/>}/>
                    <Route path='/list'
                           render={() => <ListComponent/>}/>
                    <Route path='/city/:cityName'
                           render={() => <City/>}/>
                </Switch>
            </Container>
        </section>
    );
}

export default App;
