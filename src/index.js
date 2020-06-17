import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import {action, decorate, observable} from "mobx";

class Store {
    currentCity = ' ';
    favoriteCitiesList = [];

    setCurrentCity(city) {
        this.currentCity = city
    }

    addCityToFavorites = (city) =>{
       this.favoriteCitiesList.push(city)
        console.log(this.favoriteCitiesList)
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


