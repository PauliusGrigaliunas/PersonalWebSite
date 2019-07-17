import React from "react";
import HelpTabs from "./HelpTabs.jsx";

export default function Contacts() {
  return (
    <main className="main">
      <h1 className="heading1">Pagalba</h1>
      <div className="content content--stretch content__scrollable">
        <HelpTabs />
        <div className="profile content__scrollable">
          <div className="profile__section section">
            <h2 className="heading2">Kontaktai</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
