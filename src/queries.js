import {gql} from "apollo-boost";

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

export const DETAILED_WEATHER = gql`
query detailedCityWeather($city: String!) {
  getWeather(cityName: $city) {
    message
    list {

        main {
            temp_c
        }
        dt
        weather {
            main
        }
        dt_txt
    }
  }
}
`;