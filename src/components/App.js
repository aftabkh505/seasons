import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

class App extends Component {
  state = { lat: null, err: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ err: err.message })
    );
  }

  renderContent() {
    if (this.state.err && !this.state.lat) {
      return <div>Error : {this.state.err}</div>;
    }

    if (!this.state.err && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept Location Request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
export default App;
