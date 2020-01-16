import React, { Component } from "react";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";

function checkTemp(id) {
  if (id < 300) return <img src={storm} alt="storm icon" />;
  else if (id <= 500 && id >= 299)
    return <img src={drizzle} alt="drizzle icon" />;
  else if (id <= 600 && id >= 499) return <img src={rain} alt="rain icon" />;
  else if (id <= 700 && id >= 599) return <img src={snow} alt="snow icon" />;
  else if (id <= 800 && id >= 699) return <img src={fog} alt="fog icon" />;
  else if (id == 800) return <img src={clear} alt="clear icon" />;
  else if (id == 801) return <img src={partlycloudy} alt="partlycloudy icon" />;
  else return <img src={mostlycloudy} alt="mostlycloudy" />;
}

class WeatherLater extends Component {
  render() {
    return (
      <div className="forecast">
        <div className="forecast-details">
          <p>{this.props.weather_list.dt_txt.substring(11, 16)}</p>
          {checkTemp(this.props.weather_list.weather[0].id)}
          <p>{Math.floor(this.props.weather_list.main.temp - 273.15)} C°</p>
          {console.log(this.props.weather_list.weather[0].id)}
        </div>
      </div>
    );
  }
}

export default WeatherLater;
