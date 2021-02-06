import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NextHoursStamp from "./NextHoursStamp";

export default function NextHours(props){
let [retreive, setRetreive] = useState(false);
let [forecast,setForecast] = useState(null);

function handleNextHours(response){
  setForecast(response.data); 
  setRetreive(true); 
}

if(retreive && props.city === forecast.city.name){
   console.log(forecast); 
   
   return ( 
      <div className="NextHours header">
      <h2 >Next hours</h2>
      <div className="row">
       {forecast.list.slice(0, 5).map(function(forecastItem)
       {return <NextHoursStamp  data={forecastItem}  />;})}
    
    </div>
    </div>
    );
 }

else {
   let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=0a0b749fb3632bec51c7fbeb7af687a1&units=metric`;
axios.get(apiUrl).then(handleNextHours);
    return null;
}
}