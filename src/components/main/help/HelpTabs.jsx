import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comment from "./Comment.jsx";
import edit from "../../../images/edit.svg";

export default function HelpTabs() {
  return (
    <Router>
      <div>
        <nav>
          <ul class="tabs content__fixed">
            <li>
              <Link to="/help" class="tabs__link">
                Bendra informacija
              </Link>
            </li>
            <li>
              <Link to="/contacts" class="tabs__link">
                Kontaktai
              </Link>
            </li>
            <li>
              <Link to="/comments" class="tabs__link">
                Komentarai
              </Link>
            </li>
          </ul>
        </nav>
        <Route path="/help" component={Info} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/comments" component={Comments} />
      </div>
    </Router>
  );
}

function Info() {
  return (
    <div class="profile content__scrollable">
      <div class="profile__section section">
        <h2 class="heading2">Pagrindinė informacija</h2>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div class="profile content__scrollable">
      <div class="profile__section section">
        <h2 class="heading2">Kontaktai</h2>
      </div>
    </div>
  );
}

function Comments() {
  return (
    <div class="profile content__scrollable">
      <div class="profile__section section">
        <a href="/" class="edit">
          <img src={edit} alt="edit" />
        </a>
        <h2 class="heading2">Komentarai</h2>
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
  );
}
