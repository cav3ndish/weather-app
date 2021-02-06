import React from "react";
import "./App.css";

export default function NextHoursStamp(props){
    return(
       <div className="col">
         <div>{new Date(props.data.dt*1000).getHours()}:00</div>
          <div className="temp-icon">
                  <div>
            <h3>
              
              
             {Math.round(props.data.main.temp)} °
             <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="icon" className="tempIcon"></img>
            </h3>
        </div>
        </div>
        <div className=" float" className="text-capitalize">{props.data.weather[0].description}</div>
             </div>
             
    );
}