import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function HelpTabs() {
  return (
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
  );
}
