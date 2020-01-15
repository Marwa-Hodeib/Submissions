import React, { Component } from "react";
import "./App.css";

import FakeWeather from "./Data/FakeWeather.json";
import Search from "./Search.js";
import CurrentWeather from "./CurrentWeather";
import WeatherLater from "./WeatherLater";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        {console.log(FakeWeather.list[0].main.humidity)}
        <Search />
        <CurrentWeather hum={FakeWeather.list[0].main.humidity} />
        <div className="forecast">
          {FakeWeather.list.map((item, value) => {
            if (value > 0 && value < 8) return <WeatherLater weather={item} />;
          })}
        </div>

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
