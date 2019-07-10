import React from "react";

export default function Head() {
  return (
    <div class="content__fixed">
      <table class="table">
        <thead>
          <th class="table__header-cell table__header-cell--short table__header-cell--first">
            <div class="table__header-content">
              <div class="table__column">
                <div class="table__label">
                  <label for="name">Name</label>
                  <a href="/" class="table__header-action">
                    <img src="/images/reorder.svg" alt="reorder" />
                  </a>
                </div>
              </div>
              <div class="table__search-container">
                <input
                  type="text"
                  id="name"
                  class="table__search"
                  placeholder="Search..."
                />
                include src="../table-search.html"
              </div>
            </div>
          </th>
          <th class="table__header-cell">
            <div class="table__header-content">
              <div class="table__column">
                <div class="table__label">
                  <label for="specialist">Specialist at</label>
                  <a href="/" className="table__header-action">
                    <img src="/images/reorder.svg" alt="reorder" />
                  </a>
                </div>
                <img src="/images/caret-lines.svg" alt="caret" />
              </div>
              <div class="table__search-container">
                <input
                  type="text"
                  id="specialist"
                  class="table__search"
                  placeholder="Search..."
                />
                include src="../table-search.html"
              </div>
            </div>
          </th>
          <th class="table__header-cell">
            <div class="table__header-content">
              <div class="table__column">
                <div class="table__label">
                  <label for="goal">Wants to learn</label>
                  <a href="/" class="table__header-action">
                    <img src="/images/reorder.svg" alt="reorder" />
                  </a>
                </div>
                <img src="/images/caret-lines.svg" alt="caret" />
              </div>
              <div class="table__search-container">
                <input
                  type="text"
                  id="goal"
                  class="table__search"
                  placeholder="Search..."
                />
                include src="../table-search.html"
              </div>
            </div>
          </th>
          <th class="table__header-cell table__header-cell--short table__header-cell--last table__header-cell--location">
            <div class="table__header-content">
              <div class="table__column">
                <div class="table__label">
                  <label for="location">Location</label>
                  <a href="/" className="table__header-action">
                    <img src="/images/reorder.svg" alt="caret" />
                  </a>
                </div>
                <img src="/images/caret-lines.svg" alt="caret" />
              </div>
              <div className="table__search-container">
                <input
                  type="text"
                  id="location"
                  class="table__search"
                  placeholder="Search..."
                />
                include src="../table-search.html"
              </div>
            </div>
          </th>
        </thead>
      </table>
    </div>
  );
}
