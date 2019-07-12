import React from "react";
import About from "./About.jsx";
import Goals from "./Goals.jsx";

export default function Profile() {
  return (
    <main class="main">
      <div class="content content--stretch">
        <div class="content__fixed">
          <About />
        </div>
        <div class="section content__scrollable">
          <Goals />
        </div>
      </div>
    </main>
  );
}
