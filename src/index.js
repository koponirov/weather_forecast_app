import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "mobx-react";
import {action, decorate, observable} from "mobx";

class Store {
    currentCity = null;
    favoriteCitiesList = [];

    setCurrentCity(city) {
        this.currentCity = city
    }

    addCityToFavorites(city) {
        this.favoriteCitiesList.push(city)
    }
};

decorate(Store,{
    currentCity: observable,
    favoriteCitiesList: observable,
    setCurrentCity:action,
    addCityToFavorite: action
});

const appStore = new Store();

ReactDOM.render((
    <Provider store={appStore}>
        <App />
    </Provider>

    ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
