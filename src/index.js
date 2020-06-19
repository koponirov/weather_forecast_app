import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import {action, decorate, observable} from "mobx";
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "./server";


class Store {
    currentCity = ' ';
    favoriteCitiesList = [];
    // "Berlin","Stockholm","Paris",
    // "Madrid","Novosibirsk","Moscow", "valencia","bilbao","Barcelona","New York","Florida",
    // "Calgary","Oslo","washington","colorado"

    setCurrentCity(city) {
        this.currentCity = city
    }

    addCityToFavorites = (city) => {
        this.favoriteCitiesList.push(city)
    }
    removeCityFromFavorites = (city) => {
        for(let i = this.favoriteCitiesList.length - 1; i >= 0; i--) {
            if(this.favoriteCitiesList[i] === city) {
                this.favoriteCitiesList.splice(i, 1);
            }
        }
    }
};

decorate(Store, {
    currentCity: observable,
    favoriteCitiesList: observable,
    setCurrentCity: action,
    addCityToFavorite: action
});

const appStore = new Store();

ReactDOM.render((

        <ApolloProvider client={client}>
            <BrowserRouter>
                <Provider store={appStore}>
                    <App/>
                </Provider>
            </BrowserRouter>

        </ApolloProvider>


    ),
    document.getElementById('root')
);


