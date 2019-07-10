import React from "react";
import "../styles/App.css";
import SideBar from "./sideBar/SideBar.jsx";
import Main from "./main/Main.jsx";

function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <React.Fragment>
      <SideBar />
      <Main />
    </React.Fragment>
  );
}

export default App;
