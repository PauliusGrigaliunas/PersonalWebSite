import React from "react";
import Head from "./Head";
import Body from "./Body";

export default function List() {
  return (
    <main className="main">
      <h1 className="heading1">Veiklos</h1>
      <div className="content content--bottom-square">
        <div class="content__scrollable">
          <table class="table">
            <Head />
            <Body />
          </table>
        </div>
      </div>
    </main>
  );
}
