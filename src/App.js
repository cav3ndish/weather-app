import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function App() {
  let [city, setCity] = useState(null);
  let [lineOne, setLineOne] = useState(null);

  function showWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let wind = Math.round(response.data.wind.speed);
    let humidity = response.data.main.humidity;
    let description = response.data.weather[0].description;
    setLineOne(
      <div>
        <ul className="List">
          <li>City: {city} </li>
          <li>
            {" "}
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="icon"
            ></img>
          </li>
          <li> Temperature: {temperature}°C </li>
          <li> Looks like: {description}</li>
          <li> Wind speed: {wind} km/h </li>
          <li>Humidity: {humidity}%</li>
        </ul>
      </div>
    );
  }
  function showCity(event) {
    setCity(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a0b749fb3632bec51c7fbeb7af687a1&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div>
      <form className="search-form Search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          autoFocus={true}
          required={true}
          onChange={showCity}
          placeholder="Enter a city"
        />
        <input type="submit" className="btn btn-info" value="Submit" />
      </form>

      {lineOne}
    </div>
  );
}

