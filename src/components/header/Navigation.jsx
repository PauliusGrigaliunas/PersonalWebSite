import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import bell from "../../images/bell.svg";
import foto from "../../images/paulius.png";
import { NewsContext } from "../main/news/NewsContext";
import "react-dropdown/style.css";

export default function Navigation() {
  const [news] = useContext(NewsContext);

  return (
    <React.Fragment>
      <div class="header__nav">
        <Link to="/" className="header__notification-nav">
          <img src={bell} alt="bell" />
          <div className="header__notification-count">{news.length}</div>
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
    </React.Fragment>
  );
}
