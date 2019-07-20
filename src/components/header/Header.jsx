import React from "react";
import search from "../../images/search.svg";
import Navigation from "./Navigation";

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

          <Navigation />
        </header>
      </div>
    );
  }
}
