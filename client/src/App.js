import React, {useState} from 'react'
import search from './images/search.png'
import rain from './images/rain.png'
import wind from './images/wind.png'
import humidity from './images/humidity.png'
import './App.css';

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api', {
      method: 'GET',
      // body: JSON.stringify({ city: city })
    })
    .then(
      response => response.json()
    ).then(
      weatherData => {
        setWeatherData(weatherData)
      }
    )
  }

  return (
    <div className="card"> 
      <form className="search" onSubmit={handleSubmit}> 
        <input type="text" placeholder="enter city name" spellCheck="false" />
        <button type="submit"><img src={search} alt="search" /></button> 
      </form>
      <div className="weather">
        <img src={rain} className="weather-icon"></img>
        <h1 className="temperature">40°F</h1>
        <h2 className="city">Hong Kong</h2>
        <div className="details">
          <div className="column">
            <img src={humidity} alt="humidity"></img>
            <div>
              <p className="humidity">50%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="column">
            <img src={wind} alt="wind"></img>
            <div>
              <p className="wind">40 mph</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
