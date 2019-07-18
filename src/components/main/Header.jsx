import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import search from "../../images/search.svg";
import bell from "../../images/bell.svg";
import foto from "../../images/paulius.png";
import "react-dropdown/style.css";

export default class Header extends React.Component {
  state = {
    selectedOption: "Paulius Grigaliūnas"
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
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
            <Link to="/profile" className="header__profile-nav">
              <img
                src={foto}
                className="photo header__profile-photo"
                alt="placeholder"
              />

              <div className="header__profile-name">Paulius Grigaliūnas</div>
            </Link>
          </div>
          <DropdownMenu
            triggerType="image"
            caratColor="#FF0000"
            className="header__notification-nav"
            position="left"
          >
            <Link to="/">
              <MenuItem text="Naujienos" />
            </Link>
            <Link to="/profile">
              <MenuItem text="Profilis" />
            </Link>
            <Link to="/list">
              <MenuItem text="Veiklos" />
            </Link>
            <Link to="/help">
              <MenuItem text="Pagalbos puslapis" />
            </Link>
          </DropdownMenu>
        </header>
      </div>
    );
  }
}
