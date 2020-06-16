import React from "react";
import {inject, observer} from "mobx-react";
import {CurrentWeather} from "../App";

// const Container = inject("store")(observer(({store})=><SimpleCard store={store}/>));
//
// export default Container

const CityContainer = inject("store")(observer(({store})=><CurrentWeather store={store}/>));

export default CityContainer;

