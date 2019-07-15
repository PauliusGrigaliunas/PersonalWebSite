import React from "react";
import HelpTabs from "./HelpTabs.jsx";

export default function Help() {
  return (
    <main className="main">
      <h1 className="heading1">Pagalba</h1>
      <div className="content content--stretch content__scrollable">
        <HelpTabs />
      </div>
    </main>
  );
}
