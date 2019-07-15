import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import search from "../../images/search.svg";
import bell from "../../images/bell.svg";
import caretdown from "../../images/caret-down.svg";
import foto from "../../images/paulius.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

export default function Header() {
  const options = ["one", "two", "three"];
  return (
    <div className="container__header">
      <header className="header">
        <div className="searchbar">
          <img src={search} alt="search" />
          <input
            type="text"
            className="searchbar__input"
            placeholder="paieška"
          />
        </div>
        <div class="header__nav">
          <Link to="/" className="header__notification-nav">
            <img src={bell} alt="bell" />
            <div className="header__notification-count">0</div>
          </Link>
          <Link to="/help" class="header__profile-nav">
            <img
              src={foto}
              className="photo header__profile-photo"
              alt="placeholder"
            />

            <div className="header__profile-name">Paulius Grigaliūnas</div>
            <img src={caretdown} alt="caret-down" />
          </Link>
          <Dropdown options={options}>
            <div class="header__profile-nav">
              <img
                src={foto}
                className="photo header__profile-photo"
                alt="placeholder"
              />
              <div className="header__profile-name">Paulius Grigaliūnas</div>
              <img src={caretdown} alt="caret-down" />
            </div>
            >
            <DropdownTrigger />
            <DropdownContent>
              <img src={foto} alt="me" /> Username
              <ul>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="/favorites">Favorites</a>
                </li>
                <li>
                  <a href="/logout">Log Out</a>
                </li>
              </ul>
            </DropdownContent>
          </Dropdown>
        </div>
      </header>
    </div>
  );
}
