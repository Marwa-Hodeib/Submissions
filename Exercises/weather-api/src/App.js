import React, { Component } from "react";
import "./App.css";

import FakeWeather from "./Data/FakeWeather.json";
import Search from "./Search.js";
import CurrentWeather from "./CurrentWeather";
import WeatherLater from "./WeatherLater";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      city: "India"
    };
  }
  async ApiCaller(param) {
    const api =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      this.state.city +
      "&cnt=8&units=metric&appid=571df88d447302a15fda544e0999ffbe";
    const response = await fetch(api);
    const r = await response.json();
    this.setState({
      result: r
    });
  }
  callbackFunction = childData => {
    this.setState({ city: childData });
    this.ApiCaller(childData);
  };

  async componentDidMount() {
    this.ApiCaller(this.state.city);
  }

  render() {
    return (
      <div className="app">
        <Search parentCallback={this.callbackFunction} />
        {this.state.result !== null ? (
          <CurrentWeather hum={this.state.result.list[0].main.humidity} />
        ) : (
          "loading"
        )}
        {this.state.result !== null ? (
          <div className="forecast">
            {this.state.result.list.map((item, value) => {
              if (value > 0 && value < 8)
                return <WeatherLater weather_list={item} />;
            })}
          </div>
        ) : (
          "loading"
        )}

        <main className="appmain"></main>
      </div>
    );
  }
}

export default App;
