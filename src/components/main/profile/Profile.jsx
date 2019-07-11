import React from "react";
import About from "./About.jsx";

export default function Profile() {
  return (
    <main class="main">
      <div class="content content--stretch">
        <div class="content__fixed">
          <About />
          src="../components/profile-tabs/profile-tabs-user-goals.html"
        </div>
        <div class="section content__scrollable">
          include src="../components/goals/goals.html"
        </div>
      </div>
    </main>
  );
}
