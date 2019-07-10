import React, { Component } from "react";
import Header from "./Header";
import Head from "./Head";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main className="main">
          <h1 className="heading1">Find a mentor</h1>
          <div className="content content--bottom-square">
            <Head />
            src="../components/people/body.html"
          </div>
        </main>
      </div>
    );
  }
}
