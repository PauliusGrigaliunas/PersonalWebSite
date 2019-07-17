import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Help from "./Help";
import Contacts from "./Contacts";
import Comments from "./Comments";

export default function HelpTabs() {
  return (
    <React.Component>
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
      <Route path="/help" component={Help} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/comments" component={Comments} />
    </React.Component>
  );
}
