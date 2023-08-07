import React, { useState } from 'react';
import search from './images/search.png';
import rain from './images/rain.png';
import wind from './images/wind.png';
import humidity from './images/humidity.png';
import clear from './images/clear.png';
import drizzle from './images/drizzle.png';
import mist from './images/mist.png';
import clouds from './images/clouds.png';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Function to get the appropriate weather icon
  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return clear;
      case 'Rain':
        return rain;
      case 'Drizzle':
        return drizzle;
      case 'Mist':
        return mist;
      case 'Clouds':
        return clouds;
      default:
        return '';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/api/${encodeURIComponent(city)}`)
      .then((response) => response.json())
      .then((weatherData) => {
        setWeatherData(weatherData);
      });
  };

  return (
    <div className="card">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter city name"
          spellCheck="false"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">
          <img src={search} alt="search" />
        </button>
      </form>
      <div className="error">
        <p>Invalid city name</p>
      </div>
      <div className="weather">
        {weatherData && (
          <>
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              className="weather-icon"
              alt="Weather Icon"
            />
            <h1 className="temperature">{Math.round(weatherData.main.temp)}°F</h1>
            <h2 className="city">{weatherData.name}</h2>
            <div className="details">
              <div className="column">
                <img src={humidity} alt="humidity" />
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="column">
                <img src={wind} alt="wind" />
                <div>
                  <p className="wind">{weatherData.wind.speed} mi/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
