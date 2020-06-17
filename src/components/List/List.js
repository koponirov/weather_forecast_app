import React from "react";
import {observer} from "mobx-react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";



const ListItem = ({city}) => {

    const CURRENT_WEATHER = gql`
   query currentCityWeather($city: String!) {
     getCurrentWeather(cityName: $city) {
         weather {
             main
         }
         main{
             temp_c
         }
     }
   }
 `;

    const { loading, error, data } = useQuery(CURRENT_WEATHER, {
        variables: { city },
    });

    const path = '/list/'+city

    return (

            <div>
                <span>{city}</span>
                <span>{data.getCurrentWeather.main.temp_c}</span>
                <span>{data.getCurrentWeather.weather[0].main}</span>

                <button>show forecast</button>
            </div>


    )
};

const List = observer(({ store }) => {

    return (
        <div>
            {store.favoriteCitiesList.map(city=><ListItem key={city} city={city}/>)}
        </div>
    )
});

export default List;

// const CURRENT_WEATHER = gql`
// {
//   getWeather(cityName: "Moscow") {
//     message
//     list {
//
//         main {
//             temp_c
//         }
//         weather {
//             main
//         }
//         dt_txt
//     }
//   }
// }
// `;