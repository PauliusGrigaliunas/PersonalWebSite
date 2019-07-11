import React from "react";
import caretLeft from "../../../images/caret-left.svg";

export default function News() {
  return (
    <main class="main">
      <a href="/" class="back">
        <img src={caretLeft} class="back__icon" alt="caretLeft" />
        Ankstesnė versija
      </a>
      <div class="content content--stretch">
        <div class="content__fixed">
          include src="../components/about-user.html" include
          src="../components/profile-tabs/profile-tabs-user-goals.html"
        </div>
        <div class="section content__scrollable">
          include src="../components/goals/goals.html"
        </div>
      </div>
    </main>
  );
}
