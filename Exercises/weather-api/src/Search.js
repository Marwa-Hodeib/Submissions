import React, { Component } from "react";

class Search extends Component {
  state = {
    searchInput: "India"
  };
  sendData = () => {
    this.props.parentCallback(this.state.searchInput);
  };
  render() {
    return (
      <>
        <div className="appheader">
          <input
            type="text"
            onChange={event => {
              this.setState({
                searchInput: event.target.value
              });
            }}
            className="cityname"
            placeholder="app_main"
            value={this.state.searchInput}
          ></input>
          <button
            type="submit"
            onClick={event => {
              this.sendData(this.state.searchInput);
            }}
            value="FIND WEATHER"
            className="find_button"
          >
            Find weather
          </button>
        </div>
      </>
    );
  }
}
export default Search;
