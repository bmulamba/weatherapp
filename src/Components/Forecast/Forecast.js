import React from "react";
import "./Forecast.css";

export default function Forecast({ dataCity }) {

  const temp = (dataCity.main?.temp - 275).toFixed(2);
  const temp_min = (dataCity.main?.temp_min - 275).toFixed(2);
  const temp_max = (dataCity.main?.temp_max - 275).toFixed(2);

  var today = new Date();
  var year = today.getFullYear();
  var date = today.getDay();
  var month = today.toLocaleString("default", { month: "long" });

  var day = today.toLocaleString("default", { weekday: "long" });

  var time = today.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  
  return (
    <>
      <div className="forecast">
        <div className="forecast-header">
          <h2>{dataCity.name}</h2><span>{dataCity.sys?.country}</span>
        </div>
        <div className="forecast-body">
          <h2>
            {day}, {month} - {date} {year}
          </h2>
          <h3>{time}</h3>
        </div>
        <hr></hr>
        <div className="forecast-main">
          <h1>{temp} &deg;C</h1>
          <p>{dataCity.weather !== undefined ? dataCity.weather[0].main : ""}</p>
        </div>
        <hr></hr>
        <div className="forecast-footer">
          <div>
            <p>Low</p>
            <h1>{temp_min}</h1>
          </div>
          <div>
            <p>Max</p>
            <h1>{temp_max}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
