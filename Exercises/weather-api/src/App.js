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
        <Search />
        <CurrentWeather />
        <div className="forecast">
          <WeatherLater />
          <WeatherLater />
          <WeatherLater />
          <WeatherLater />
          <WeatherLater />
          <WeatherLater />
          <WeatherLater />
        </div>

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
