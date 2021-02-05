import React, { useState } from "react";
import axios from "axios";

export default function NextHours(props){
let [retreive, setRetreive] = useState(false);
let [forecast,setForecast] = useState(null);

function handleNextHours(response){
  setForecast(response.data); 
  setRetreive(true); 
 
}

if(retreive){
   console.log(forecast); 
  let temp =Math.round(forecast.list[0].main.temp);
  let description = (forecast.list[0].weather[0].description);
  let icon = (forecast.list[0].weather[0].icon);
   return ( 
      <div className="NextHours">
      <h3 className="header">Next hours</h3>
      <div className="row">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
             {temp} °{" "}
             <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
            </h3>
          </div>
        </div>
        <div className="col-4 float">{new Date(forecast.list[0].dt*1000).getHours()}:00</div>
        <div className="col-4 float" className="text-capitalize">{description}</div>
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