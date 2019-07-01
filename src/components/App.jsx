import React from "react";
import logo from "../images/PG-logo.png";
import foto from "../images/paulius.png";
import "../styles/App.css";
import SideBar from "./sideBar/SideBar.jsx";
import Header from "./header/Header.jsx";

function App() {
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
              <img className="me__photo photo" src={logo} alt="placeholder" />
            </div>
            <h2 className="heading2 me__name">Paulius Grigaliūnas</h2>
            <div className="badge">
              <div className="badge__icon">
                <img src="/images/school.svg" alt="school" />
              </div>
              Student
            </div>
          </div>
          nav/nav
        </a>
      </div>
      components/copyright.html
    </div>
  );
}

export default App;
