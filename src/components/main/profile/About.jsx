import React from "react";
import foto from "../../../images/paulius.png";
import facebook from "../../../images/facebook.png";

export default function About() {
  return (
    <div className="about">
      <img src={foto} className="photo about__photo" alt="about" />
      <div>
        <h2 className="heading2 heading2--large">Paulius Grigaliūnas</h2>
        <p className="title">Programų sistemų studentas</p>
        <div className="about__contact">
          <button
            type="button"
            className="button button--primary button--contact"
          >
            El. paštas
          </button>
          <button
            type="button"
            className="button button--primary button--slack"
          >
            <img
              src={facebook}
              className="button__icon logo__smimage"
              alt="facebook"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
