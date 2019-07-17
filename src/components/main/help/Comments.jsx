import React from "react";
import HelpTabs from "./HelpTabs.jsx";
import Comment from "./Comment.jsx";
import edit from "../../../images/edit.svg";

export default function Comments() {
  return (
    <main className="main">
      <h1 className="heading1">Pagalba</h1>
      <div className="content content--stretch content__scrollable">
        <HelpTabs />
        <div className="profile content__scrollable">
          <div className="profile__section section">
            <a href="/" className="edit">
              <img src={edit} alt="edit" />
            </a>
            <h2 className="heading2">Komentarai</h2>
            <ul className="goals">
              <li className="goals__row">
                <Comment />
              </li>
              <li className="goals__row">
                <Comment />
              </li>
              <li className="goals__row goals__row--last">
                <Comment />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
