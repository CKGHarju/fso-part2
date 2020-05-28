import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Weather = ({countryName}) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    if (!api_key) {
      throw new Error('There is no weatherstack API key present.')
    }
    const baseUrl = 'http://api.weatherstack.com/'
    axios
      .get(`${baseUrl}/current?access_key=${api_key}&query=${countryName}&units=m`)
      .then(response => setWeather(response.data))
  }, [countryName])

  if (!weather) return <p>...loading weather</p>;
  const { location, current } = weather
  return (
    <div>
      <h3>Weather in {location.name}</h3>
      <p><b>temperature:</b> {current.temperature} Celsius</p>
      <img height='64' src={current.weather_icons && current.weather_icons[0]} alt="weather icon"/>
      <p><b>wind:</b> {current.wind_speed} kph, direction: {current.wind_dir}</p>
    </div>
  )
}

export default Weather;
