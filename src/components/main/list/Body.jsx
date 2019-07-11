import React from "react";
import Row from "./Row.jsx";

export default function Body() {
  return (
    <div class="content__scrollable">
      <table class="table">
        <tbody>
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
}
