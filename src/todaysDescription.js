import React from "react";

export default function todaysDescription() {
  return (
    <div className="row">
      <div className="col-4">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          alt="☀🌦"
          className="mx-auto d-block"
          id="todays-weather-icon"
        />
        <h5 className="text-center" id="todays-description">
          SUNNY{" "}
        </h5>
      </div>
      <div className="col-4">
        <div className="weather-temperature">
          <h4 className="text-center">
            <span id="todays-temperature">
              25
              <strong />
            </span>
            <span className="units">
              <a href="..." id="celsius-link" className="active">
                °C
              </a>
              |
              <a href="..." id="fahrenheit-link">
                °F
              </a>
            </span>
          </h4>
        </div>
      </div>
      <div className="col-4">
        <ul id="todays-weather-conditions">
          <li>
            <strong>Temp min/max:</strong> 10 °C | 20 °C
          </li>
          <li>
            <strong>Humidity:</strong> 20 %
          </li>
          <li>
            <strong>Wind:</strong> 5 km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
