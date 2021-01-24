import React from "react";
import FormDate from "./FormDate";

export default function CurrentWeather(props){

    return(
    <div className="CurrentWeather">
      <h3 className="header">Current weather</h3>
      <div className="row">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
              {props.data.temperature}°   <br /> 
             <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
              </h3>
          </div>
        </div>
        <div className="col-4"> <FormDate date={props.data.todayDate} /></div>
        <div className="col-4">
          <div>{props.data.humidity}%</div>
          <div>{props.data.wind} km/h</div>
          <div className="text-capitalize">{props.data.description}</div>
        </div>
      </div>
    </div>
    );
}