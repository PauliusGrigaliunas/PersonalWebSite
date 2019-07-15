import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comment from "./Comment.jsx";
import edit from "../../../images/edit.svg";

export default function HelpTabs() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="tabs content__fixed">
            <li>
              <Link to="/help">
                <div className="tabs__link">Bendra informacija</div>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <div className="tabs__link">Kontaktai</div>
              </Link>
            </li>
            <li>
              <Link to="/comments">
                <div className="tabs__link">Komentarai</div>
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
    <div className="profile content__scrollable">
      <div className="profile__section section">
        <h2 className="heading2">Pagrindinė informacija</h2>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="profile content__scrollable">
      <div className="profile__section section">
        <h2 className="heading2">Kontaktai</h2>
      </div>
    </div>
  );
}

function Comments() {
  return (
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
  );
}
