import React, { Component } from "react";
import StudentContainer from "./containers/StudentContainer.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <StudentContainer />
      </div>
    );
  }
}
