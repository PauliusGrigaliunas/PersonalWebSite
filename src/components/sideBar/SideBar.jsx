import React, { Component } from "react";
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
          <a href="/" className="logo">
            <div className="logo__wrapper">
              <img className="logo__image" src={logo} alt="PG Logo" />
            </div>
          </a>

          <a
            className="App-link"
            href="https://karklas.mif.vu.lt/~pagr4013/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <ul class="nav">
                <li>
                  <a href="/profile" class="nav-link">
                    <div class="nav-link__icon">
                      <img src={profile} alt="profile" />
                    </div>
                    Profilis
                  </a>
                </li>
                <li>
                  <a href="/list" className="nav-link">
                    <div class="nav-link__icon">
                      <img src={list} alt="list" />
                    </div>
                    Veiklos
                  </a>
                </li>
                <li>
                  <a href="/help" className="nav-link">
                    <div class="nav-link__icon">
                      <img src={help} alt="help" />
                    </div>
                    Pagalba
                  </a>
                </li>
              </ul>
            </nav>
          </a>
        </div>
        <p class="sidebar__copyright">; 2019 Paulius Grigaliūnas</p>
      </div>
    );
  }
}
