import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <header className="appheader">
        <form className="whattemperature">
          <input className="cityname" type="text" placeholder="Write City" />
          <button type="submit" value="submit">
            Find weather
          </button>
        </form>
      </header>
    );
  }
}

export default Search;
