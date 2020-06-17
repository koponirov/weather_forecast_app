import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import CityContainer from "./components/CityContainer";
import Container from '@material-ui/core/Container';
import CityCard from "./components/CityCard";
import {observer} from "mobx-react";
import FormContainer from "./components/Form/MyForm";
import ListContainer from "./components/List/ListContainer";


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



export const CurrentWeather = observer(({ store }) => {

    const city = store.currentCity;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Invalid city name or connection problem</p>;

    console.log(data);

    return (
        <CityCard data={data} store={store} />
    )
});

function App(props) {
    return (
        <ApolloProvider client={client}>
            <Container className="app">
                <h1 className="header">Weather Forecast</h1>
                <FormContainer/>
                <CityContainer/>
                <ListContainer/>
            </Container>

        </ApolloProvider>
    );
}

export default App;
