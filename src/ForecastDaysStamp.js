import React from "react";

export default function ForecastDaysStamp(props){
    let today =  new Date(props.data.dt*1000);
    let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let currentDay = days[today.getDay()];

    return(
         <div className="col-4">
          <div className="card temp-icon">
            <h3 className="temperatureValue">
              {Math.round(props.data.main.temp)}°
             <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
            </h3>
          </div>
          <div className="letter-space">
            <div>{currentDay}</div>
            <div  className="text-capitalize">{props.data.weather[0].description}</div>
          </div>
        </div>
    );
}
