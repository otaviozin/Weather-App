import { weatherURL } from '.';

export const getWeather = (city) => {
    const apiResponse = weatherURL.get(`q=${city}`);
    return apiResponse;
}