import React, { Component } from "react";
import Header from "./Header";
import List from "./list/List";
import Help from "./help/Help";

export default class Main extends Component {
  render() {
    return (
      <div className="containerr">
        <Header />
        <List />
        <Help />
      </div>
    );
  }
}
