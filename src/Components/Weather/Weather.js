import { useEffect, useState } from 'react'
import axios from 'axios'
import './Weather.css'

const API_KEY = "86d6ab5391472bbdb665c6785ba5769a";
export const Weather = () => {
    const [weather, setWeather] = useState({
        city: "Delhi",
        degrees: 0,
        weatherIcon: "",
        humidity: 0,
        description: "Sunny",
    });
    const getAPI = (lat, lon) => {
        let API = "";
        if (lat === undefined || lon === undefined)
            API = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${API_KEY}`;
        else
            API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
        return API;
    };

    const weatherAPICall = async (lat, lon) => {
        const API = getAPI(lat, lon);
        try {
            const res = await axios.get(API);
            const weatherInfo = res.data
            setWeather({
                city: weatherInfo.name,
                degrees: Math.round(weatherInfo.main.temp - 273.15),
                weatherIcon: weatherInfo.weather[0].icon,
                humidity: weatherInfo.main.humidity,
                description: weatherInfo.weather[0].description,
            });
        } catch (err) {
            alert(err)
        }
    };
    const success = (pos) => {
        const crd = pos.coords;
        weatherAPICall(crd.latitude, crd.longitude);
    };
    const error = (err) => {
        weatherAPICall();
    };
    const getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error);
    };
    useEffect(() => {
        getGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="weather-section">
                <div className="weather-city">{weather.city}</div>
                <div className="weather-des">{weather.description.toLocaleUpperCase()}</div>
                <div className="weather-temp">
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weatherIcon}.png`}
                        alt="weatherpic"
                    />
                    {weather.degrees}°
                </div>
                <div className="humidity">
                    Humidity: {weather.humidity}
                </div>
            </div>
        </>
    )
}