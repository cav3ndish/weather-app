import React from "react";
import FormDate from "./FormDate";

export default function CurrentWeather(props){

    return(
    <div className="CurrentWeather">
      <h3 className="header">Current weather</h3>
      <div className="row clearfix">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
              {props.units === "celsius" 
              ? props.data.temperature : Math.round((props.data.temperature*9)/5+32)}°   <br /> 
             <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
              </h3>
          </div>
        </div>
        <div className="col-4"> <FormDate date={props.data.todayDate} /></div>
        <div className="col-4">
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind speed: {props.data.wind} km/h</div>
          <div className="text-capitalize">Looks like: {props.data.description}</div>
        </div>
      </div>
    </div>
    );
}