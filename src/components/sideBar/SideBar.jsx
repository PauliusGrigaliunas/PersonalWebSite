import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import logo from "../../images/PG-logo.png";
import foto from "../../images/paulius.png";
import list from "../../images/list.svg";
import help from "../../images/help.svg";
import school from "../../images/school.svg";
import profile from "../../images/profile.svg";
import "../../styles/site-styles.scss";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <div href="/" className="logo">
            <div className="logo__wrapper">
              <img className="logo__image" src={logo} alt="PG Logo" />
            </div>
          </div>

          <div className="App-link" href="/" rel="noopener noreferrer">
            <div className="me">
              <div className="progress-circle">
                <img className="me__photo photo" src={foto} alt="placeholder" />
              </div>
              <h2 className="heading2 me__name">Paulius Grigaliūnas</h2>
              <div className="badge">
                <div className="badge__icon">
                  <img src={school} alt="school" />
                </div>
                Programų sistemų studentas
              </div>
            </div>

            <nav>
              <ul className="nav">
                <li>
                  <Link to="/profile">
                    <div className="nav-link">
                      <div className="nav-link__icon">
                        <img src={profile} alt="profile" />
                      </div>
                      Profilis
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/list">
                    <div className="nav-link">
                      <div className="nav-link__icon">
                        <img src={list} alt="list" />
                      </div>
                      Veiklos
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/help">
                    <div className="nav-link">
                      <div className="nav-link__icon">
                        <img src={help} alt="help" />
                      </div>
                      Pagalba
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="sidebar__copyright">2019 Paulius Grigaliūnas</p>
      </div>
    );
  }
}
