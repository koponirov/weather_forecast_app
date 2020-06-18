import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Main from "./components/Main";
import {Redirect,Switch, Route} from "react-router-dom";
import List from "./components/List/List";
import City from "./components/City";


function App() {
    return (

            <Container className="app">
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={'/main'}/>}/>
                    <Route path='/main'
                           render={() => <Main/>}/>
                    <Route path='/list'
                           render={() => <List/>}/>
                    <Route path='/city/:cityName'
                           render={() => <City/>}/>
                </Switch>

            </Container>


    );
}

export default App;
