import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import CityContainer from "./components/CityContainer";
import Container from '@material-ui/core/Container';
import SimpleCard from "./components/CityCard";
import {observer} from "mobx-react";
import FormContainer from "./components/Form/MyForm";


const client = new ApolloClient({
    uri: 'https://7b3u2.sse.codesandbox.io',
});

export const CURRENT_WEATHER = gql`
   query currentCityWeather($city: String!) {
     getCurrentWeather(cityName: $city) {
         weather {
             main
             description
         }
         main{
             temp_c
         }
         name
     }
   }
 `;

const CURRENT_WEATHER11 = gql`
{
  getWeather(cityName: "Moscow") {
    cod 
    message 
    cnt 
    list { 
        dt 
        main { 
            temp 
            feels_like 
            temp_min 
            temp_max 
            temp_kf 
            temp_f 
            temp_c 
            pressure 
            sea_level 
            grnd_level 
            humidity 
        }
        weather { 
            id 
            main 
            description 
            icon 
        }
        clouds { 
            all 
        }
        wind { 
            speed 
            deg 
        }
        rain { 
            h1 
            h3 
        }
        snow { 
            h1 
            h3 
        }
        sys { 
            pod 
        }
        dt_txt 
    }
    city { 
        id 
        name 
        country 
        coord { 
            lat 
            lon 
        }
        population 
        timezone 
        sunrise 
        sunset 
    }
    fahrenheit_avg 
    celcius_avg
    kelvin_avg 
    fahrenheit_max_avg
    celcius_max_avg 
    kelvin_max_avg 
    pressure_avg 
    humidity_avg 
    sea_level_avg 
    pressure 
    humidity 
    temp_farenheit 
    temp_celcius 
    temp_kelvin 
    sea_level 
}
}
`;

export const CurrentWeather = observer((props) => {

    const city = props.store.currentCity;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Invalid city name or connection problem</p>;

    console.log(data);

    return (
        <SimpleCard data={data} />
    )
});

function App(props) {
    return (
        <ApolloProvider client={client}>
            <Container className="app">
                <h1 className="header">Weather Forecast</h1>
                <FormContainer/>
                <CityContainer/>
            </Container>

        </ApolloProvider>
    );
}

export default App;
