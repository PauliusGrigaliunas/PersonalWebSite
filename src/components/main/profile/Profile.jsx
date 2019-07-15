import React from "react";
import About from "./About.jsx";
import Goals from "./Goals.jsx";

export default function Profile() {
  return (
    <main className="main">
      <div className="content content--stretch">
        <div className="content__fixed">
          <About />
        </div>
        <div className="section content__scrollable">
          <Goals />
        </div>
      </div>
    </main>
  );
}
