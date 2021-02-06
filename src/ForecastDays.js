import React , { useState }from "react";
import axios from "axios";
import ForecastDaysStamp from "./ForecastDaysStamp";

export default function ForecastDays(props){
    
let [load, setLoad] = useState(false);
let [forecastDays,setForecastDays] = useState(null);

function handleForecastDays(response){
  setForecastDays(response.data); 
  setLoad(true); 
}

if(load && props.city === forecastDays.city.name){
   console.log(forecastDays); 
   
   return ( 
    <div className="Forecast">
      <h2 className="display-3 week-end">Next three days</h2>
      <div className="row">
       {forecastDays.list.slice(0, 5).map(function(forecastItem)
       {return <ForecastDaysStamp  data={forecastItem}  />;})}
    
    </div>
    </div>
    );
 }

else {
   let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=0a0b749fb3632bec51c7fbeb7af687a1&units=metric`;
axios.get(apiUrl).then(handleForecastDays);
    return null;
}
}



  
       
      