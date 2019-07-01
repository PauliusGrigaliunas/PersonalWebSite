import React from "react";
import logo from "../images/PG-logo.png";
import "../styles/App.css";
import SideBar from "./sideBar/SideBar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn OP
        </a>
      </header>
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
