import React from "react";
import "./Forecast.css";

export default function Forecast({ dataCity }) {
  const temp = (dataCity.main?.temp - 273.15).toFixed(2);
  const temp_min = (dataCity.main?.temp_min - 273.15).toFixed(2);
  const temp_max = (dataCity.main?.temp_max - 273.15).toFixed(2);

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  let icon;
  if (typeof dataCity.main != "undefined") {
      if(dataCity.weather[0].main === "Clouds"){
          icon = "fa-cloud"
      } else if(dataCity.weather[0].main === "Thunderstorm"){
        icon = "fa-bold"
      } else if(dataCity.weather[0].main === "Drizzle"){
        icon = "fa-cloud-rain"
      } else if(dataCity.weather[0].main === "Rain"){
        icon = "fa-cloud-shower-heavy"
      } else if(dataCity.weather[0].main === "Snow"){
        icon = "fa-snow-flake"
      } else {
        icon = "fa-smog"
      } 
  }else {
    return (
      <div>Loading ...</div>
    )
  }

  // console.log(d.getDate());
  return (
    <>
      <div className="forecast">
        <div className="forecast-header">
          <h2>{dataCity.name}</h2>
          <span>{dataCity.sys?.country}</span>
        </div>
        <div className="forecast-body">
          <h2>
            {day}, {month},  {date},  {year}
          </h2>
          <h3>{time}</h3>
        </div>
        <hr></hr>
        <div className="forecast-main">
          <h1>{temp} &deg;C</h1>
          <div className="icon-weather">
              <span>
                  <i className={`fas ${icon} fa-4x`}></i>
              </span>
          <h4>
            {dataCity.weather !== undefined ? dataCity.weather[0].main : ""}
          </h4>
          </div>
          
        </div>
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
