import React from "react";
import envelope from "../../../images/envelope.svg";
import eye from "../../../images/eye.svg";

export default function Row() {
  return (
    <tr class="table__row">
      <td class="table__cell table__cell--short table__cell--first">
        <div class="table__content">
          <img
            src="https://via.placeholder.com/36x36"
            alt="placeholder"
            class="photo table__photo"
          />
          Pavyzdys
        </div>
      </td>
      <td class="table__cell">Pavyzdžiai...</td>
      <td class="table__cell">http...</td>
      <td class="table__cell table__cell--short table__cell--last">
        <div class="table__content table__content--actions">
          Vilnius
          <div class="table__actions">
            <a href="/" class="table__action">
              <img src={envelope} alt="envelope" />
            </a>
            <a href="/" class="table__action">
              <img src={eye} alt="eye" />
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
