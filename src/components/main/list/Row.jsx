import React from "react";
import envelope from "../../../images/envelope.svg";
import eye from "../../../images/eye.svg";

export default function Row() {
  return (
    <tr className="table__row">
      <td className="table__cell table__cell--short table__cell--first">
        <div className="table__content">
          <img
            src="https://via.placeholder.com/36x36"
            alt="placeholder"
            className="photo table__photo"
          />
          Pavyzdys
        </div>
      </td>

      <td className="table__cell">Pavyzdžiai...</td>
      <td className="table__cell">http...</td>
      <td className="table__cell table__cell--short table__cell--last">
        <div className="table__content table__content--actions">
          Vilnius
          <div className="table__actions">
            <a href="/" className="table__action">
              <img src={envelope} alt="envelope" />
            </a>
            <a href="/" className="table__action">
              <img src={eye} alt="eye" />
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
