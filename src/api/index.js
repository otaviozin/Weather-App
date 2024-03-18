import axios from 'axios';

const weatherToken = process.env.NEXT_PUBLIC_WEATHER_TOKEN;

export const weatherURL = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
    headers: {
        'Authorization': `Bearer ${weatherToken}`
    }
});