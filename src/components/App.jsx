import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import SideBar from "./sideBar/SideBar.jsx";
import Header from "./main/Header";
import News from "./main/news/News";
import Profile from "./main/profile/Profile";
import List from "./main/list/List";
import Help from "./main/help/Help";
import Contacts from "./main/help/Contacts";
import Comments from "./main/help/Comments";

function App() {
  return (
    <Router>
      <SideBar />
      <div className="containerr">
        <Header />
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={List} />
          <Route path="/help" component={Help} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
