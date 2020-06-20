import {zonedTimeToUtc} from "date-fns-tz";
import {format} from "date-fns";

export const getCurrentTemperature = (data) => {
    return data.getCurrentWeather.main.temp_c.toFixed(1)
};

export const getTemperature = (data) => {
    return data.main.temp_c.toFixed(1)
};

export const getCityName = (data) => {
    return data.getCurrentWeather.name
};

export const getCurrentCityWeather = (data) => {
    return data.getCurrentWeather.weather[0].main;
};

export const getCityWeather = (data) => {
    return data.weather[0].main;
};

export const getDate = (data) => {

    const utcDate = zonedTimeToUtc(data.dt_txt, 'UTC+00:00');

    return format(utcDate,"EEEE (d.MM) HH:mm");
};


