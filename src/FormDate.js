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
    console.log(props.date)

return (<div>
    <ul className="dateList">
    <li>{currentDay}</li> 
    <li>
     {month}   {date} </li>
    <li> {year}</li></ul>
    </div>
    );
}