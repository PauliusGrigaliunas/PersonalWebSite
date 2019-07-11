import React, { Component } from "react";
import Header from "./Header";
import Head from "./Head";
import Body from "./Body";

export default class Main extends Component {
  render() {
    return (
      <div className="containerr">
        <Header />
        <main className="main">
          <h1 className="heading1">Veiklos</h1>
          <div className="content content--bottom-square">
            <Head />
            <Body />
          </div>
        </main>
      </div>
    );
  }
}
