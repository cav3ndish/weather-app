import React, { useState } from "react";
import Forecast from "./Forecast";
import NextHours from "./NextHours";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

export default function Weather(props){

let [currentData, setCurrentData] = useState({ready : false});
let [city, setCity]= useState(props.originalCity);
  

   function showWeather(response) {
     setCurrentData({
     ready: true,
     temperature : Math.round(response.data.main.temp),
     wind : Math.round(response.data.wind.speed),
     humidity : response.data.main.humidity,
     description : response.data.weather[0].description,
     icon: response.data.weather[0].icon,
     todayDate : new Date(response.data.dt * 1000),
     city: response.data.name,})}

function handleSubmit(event) {
    event.preventDefault();
   search();}
function search()
  { let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a0b749fb3632bec51c7fbeb7af687a1&units=metric`;
    axios.get(url).then(showWeather).catch(tryAgain);
  function tryAgain(){
  alert("Narnia is not an option, try again 😀");}
  }
  function showCity(event) {
    setCity( event.target.value );}

   

if(currentData.ready) {
    
    return(
        <div className="row ">
      <div className="col-4">
        <div className="card current-city">
          <div className="card-body ">
            <h6 className="display-6  city text-capitalize"> {city}</h6> 🗺
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
        <input type="submit" className="btn btn-info w-50" value="Submit" />
      </form>
    </div>
      </div>
      <div className="col-2">
    <div>
      <button type="button" className="btn btn-info w-60" >
        C°
      </button>
      <button type="button" className="btn btn-info w-60"  >
        F°
      </button>
 </div>
      </div>
     <CurrentWeather data={currentData} />
<NextHours />
    <Forecast />
 </div>   );
}
else {
    search();
    return "searching...";
}
   }