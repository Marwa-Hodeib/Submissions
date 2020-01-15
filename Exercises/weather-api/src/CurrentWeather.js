import React, { Component } from "react";
import rainy from "./img/weather-icons/rain.svg";

class CurrentWeather extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="image-1" src={rainy} alt="weather-logo" />
        <figcaption>Overcast Clouds</figcaption>
        <div className="current weather">
          <div className="temperature">
            <p>
              <b>Temperature </b>10° to 11°
            </p>
          </div>
          <div className="pressure">
            <p>
              <b> Humidity </b>78%
            </p>
            <p>
              {" "}
              <b>Pressure </b>1008.48
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
