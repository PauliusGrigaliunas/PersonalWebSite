import React from "react";
import foto from "../../../images/paulius.png";
import facebook from "../../../images/facebook.png";

export default function About() {
  return (
    <div class="about">
      <img src={foto} class="photo about__photo" alt="about" />
      <div>
        <h2 class="heading2 heading2--large">Paulius Grigaliūnas</h2>
        <p class="title">Programų sistemų studentas</p>
        <div class="about__contact">
          <button type="button" class="button button--primary button--contact">
            El. paštas
          </button>
          <button type="button" class="button button--primary button--slack">
            <img
              src={facebook}
              class="button__icon logo__smimage"
              alt="facebook"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
