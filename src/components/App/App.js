import React from 'react';
import './App.css';
import Search from "../Search";
import {Redirect, Switch, Route} from "react-router-dom";
import ListComponent from "../List/List";
import City from "../City";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";

function App() {

    return (
        <section>
            <Header/>
            <Container className='container'>
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={'/search'}/>}/>
                    <Route path='/search'
                           render={() => <Search/>}/>
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
