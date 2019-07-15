import React from "react";
import reorder from "../../../images/reorder.svg";
import caret from "../../../images/caret-lines.svg";
import search from "../../../images/search.svg";

export default function Head() {
  return (
    <thead>
      <th className="table__header-cell table__header-cell--short table__header-cell--first">
        <div className="table__header-content">
          <div className="table__column">
            <div className="table__label">
              <label for="name">Pavadinimas</label>
              <a href="/" className="table__header-action">
                <img src={reorder} alt="reorder" />
              </a>
            </div>
          </div>
          <div className="table__search-container">
            <input
              type="text"
              id="name"
              className="table__search"
              placeholder="Search..."
            />
            <div className="table__search-icon">
              <img
                className="table__search-icon-img"
                src={search}
                alt="search"
              />
            </div>
          </div>
        </div>
      </th>
      <th class="table__header-cell">
        <div class="table__header-content">
          <div class="table__column">
            <div class="table__label">
              <label for="specialist">Kategorija</label>
              <a href="/" className="table__header-action">
                <img src={reorder} alt="reorder" />
              </a>
            </div>
            <img src={caret} alt="caret" />
          </div>
          <div class="table__search-container">
            <input
              type="text"
              id="specialist"
              class="table__search"
              placeholder="Search..."
            />
            <div class="table__search-icon">
              <img class="table__search-icon-img" src={search} alt="search" />
            </div>
          </div>
        </div>
      </th>
      <th class="table__header-cell">
        <div class="table__header-content">
          <div class="table__column">
            <div class="table__label">
              <label for="goal">Aprašymas</label>
              <a href="/" class="table__header-action">
                <img src={reorder} alt="reorder" />
              </a>
            </div>
            <img src={caret} alt="caret" />
          </div>
          <div class="table__search-container">
            <input
              type="text"
              id="goal"
              class="table__search"
              placeholder="Search..."
            />
            <div class="table__search-icon">
              <img class="table__search-icon-img" src={search} alt="search" />
            </div>
          </div>
        </div>
      </th>
      <th class="table__header-cell table__header-cell--short table__header-cell--last table__header-cell--location">
        <div class="table__header-content">
          <div class="table__column">
            <div class="table__label">
              <label for="location">Vieta</label>
              <a href="/" className="table__header-action">
                <img src={reorder} alt="caret" />
              </a>
            </div>
            <img src={caret} alt="caret" />
          </div>
          <div className="table__search-container">
            <input
              type="text"
              id="location"
              class="table__search"
              placeholder="Search..."
            />
            <div class="table__search-icon">
              <img class="table__search-icon-img" src={search} alt="search" />
            </div>
          </div>
        </div>
      </th>
    </thead>
  );
}
