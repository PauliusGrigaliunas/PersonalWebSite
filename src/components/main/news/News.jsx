import React from "react";
import caretLeft from "../../../images/caret-left.svg";
import NewsList from "./NewsList";
import AddNew from "./AddNew";

export default function News() {
  return (
    <main className="main">
      <a href="/" className="back">
        <img src={caretLeft} className="back__icon" alt="caretLeft" />
        Ankstesnė versija
      </a>
      <div className="content content--stretch">
        <div className="content__fixed" />
        <div className="profile content__scrollable">
          <div className="profile__section section">
            <h2 className="heading2">Naujienos</h2>
            <ul className="goals">
              <AddNew />
              <NewsList />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
