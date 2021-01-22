import React from "react";

export default function Forecast(){
    return(
  <div className="Forecast">
      <h1 className="display-3 week-end">Next three days</h1>
      <div className="row">
        <div className="col-4">
          <div className="card temp-icon">
            <h3 className="temperatureValue">
              19°
              <img src="/" alt="weather icon" className="tempIcon" />{" "}
            </h3>
          </div>
          <div className="letter-space">
            date
            <div>description</div>
          </div>
        </div>
      </div>
    </div>);
    }