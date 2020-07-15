import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App/App';
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
        this.favoriteCitiesList = this.favoriteCitiesList.filter(c => c !== city)
    }
};

decorate(Store, {
    currentCity: observable,
    favoriteCitiesList: observable,
    setCurrentCity: action,
    addCityToFavorite: action,
    removeCityFromFavorites: action
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


