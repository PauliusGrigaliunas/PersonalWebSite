import React from "react";
import search from "../../images/search.svg";
import bell from "../../images/bell.svg";
import caretdown from "../../images/caret-down.svg";
import foto from "../../images/paulius.png";

export default function Header() {
  return (
    <div className="container__header">
      <header className="header">
        <div className="searchbar">
          <img src={search} alt="search" />
          <input
            type="text"
            className="searchbar__input"
            placeholder="Search by a keyword..."
          />
        </div>
        <div class="header__nav">
          <a href="/a" className="header__notification-nav">
            <img src={bell} alt="bell" />
            <div className="header__notification-count">2</div>
          </a>
          <a href="/b" class="header__profile-nav">
            <img
              src={foto}
              className="photo header__profile-photo"
              alt="placeholder"
            />

            <div className="header__profile-name">Paulius Grigaliūnas</div>
            <img src={caretdown} alt="caret-down" />
          </a>
        </div>
      </header>
    </div>
  );
}
