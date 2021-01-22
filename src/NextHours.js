import React from "react";

export default function NextHours(){
    return (
        <div className="NextHours">
      <h3 className="header">Next hours</h3>
      <div className="row">
        <div className="col-4">
          <div className="temp-icon">
            <h3>
              temperature°{" "}
              <img src="/" alt="weather icon" className="tempIcon" />
            </h3>
          </div>
        </div>
        <div className="col-4 float">date</div>
        <div className="col-4 float">description</div>
      </div>
    </div>
    );
}