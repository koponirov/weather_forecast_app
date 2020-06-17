import React from "react";
import {inject, observer} from "mobx-react";
import {CurrentWeather} from "../App";

const CityContainer = inject("store")(observer(({store})=><CurrentWeather store={store}/>));

export default CityContainer;

