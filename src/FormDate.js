import React from "react";
import './App.css';

export default function FormDate(props){

let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepember",
    "October",
    "November",
    "December"
  ];

  let date = props.date.getDate();
  let year =props.date.getFullYear();
let currentDay = days[props.date.getDay()];
let month = months[props.date.getMonth()];
let hours = props.date.getHours();
if (hours < 10){hours = `0${hours}`}
let minutes = props.date.getMinutes();
if(minutes<10){minutes=`0${minutes}`}

return (<div>
    <ul className="dateList">
      <li>Last updated on</li>
    <li>{currentDay}</li> 
    <li>
     {month}   {date}  {year}</li>
    <li>{hours}:{minutes}</li></ul>
    </div>
    );
}