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
   
      <div className="CurrentWeather">
      <h3 className="header">Current weather</h3>

      <div className="row">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
              {temperature}°   <br /> 
             <img src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
              </h3>
          </div>
        </div>
        <div className="col-4"> today's date</div>
        <div className="col-4">
          <div>{humidity}%</div>
          <div>{wind} km/h</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
    </div>
    );}
  
  function showCity(event) {
    setCity(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );}

  function tryAgain(){
  alert("Narnia is not an option, try again 😀");}

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a0b749fb3632bec51c7fbeb7af687a1&units=metric`;
    axios.get(url).then(showWeather).catch(tryAgain);}


  return (
   
<div className="App">

 <div className="row ">
      <div className="col-4">
        <div className="card current-city">
          <div className="card-body ">
            <h6 className="display-6  city"> {city} 🗺</h6>
          </div>
        </div>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-info">
          My location
        </button>
      </div>
      <div className="col-4">
      <div className="search-form">
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
    </div>
      </div>
      <div className="col-2">
      <div>
      <button type="button" className="btn btn-info">
        C°
      </button>
      <button type="button" className="btn btn-info">
        F°
      </button>
    </div>
      </div>
      </div>
      {lineOne}
      <div className="Forecast">
      <h1 className="display-3 week-end">Next three days</h1>
      <div className="row">
        <div className="col-4">
          <div className="card temp-icon">
            <h3 className="temperatureValue">
              19°
              <img src="/" alt="weather icon" className="tempIcon" />{" "}
            </h3>
          </div>
          <div className="letter-space">
            date
            <div>description</div>
          </div>
        </div>
      </div>
    </div>
<div className="NextHours">
      <h3 className="header">Next hours</h3>
      <div className="row">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
              temperature°{" "}
              <img src="/" alt="weather icon" className="tempIcon" />
            </h3>
          </div>
        </div>
        <div className="col-4 float">date</div>
        <div className="col-4 float">description</div>
      </div>
    </div>
      <footer>
      <a href="https://github.com/cav3ndish/weather-app" target="blank" > Open Source Code </a> 
  by Cav3ndish </footer> 
 
   </div>
  
  );}
  

