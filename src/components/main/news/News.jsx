import React from "react";
import caretLeft from "../../../images/caret-left.svg";
import Comment from "../help/Comment.jsx";

export default function News() {
  return (
    <main class="main">
      <a href="/" class="back">
        <img src={caretLeft} class="back__icon" alt="caretLeft" />
        Ankstesnė versija
      </a>
      <div class="content content--stretch">
        <div class="content__fixed" />
        <div class="profile content__scrollable">
          <div class="profile__section section">
            <h2 class="heading2">Naujienos</h2>
            <ul class="goals">
              <li class="goals__row">
                <Comment />
              </li>
              <li class="goals__row">
                <Comment />
              </li>
              <li class="goals__row goals__row--last">
                <Comment />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
