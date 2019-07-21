import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import deletebut from "../../../images/delete.svg";

export default function NewsList() {
  const [news, setNews] = useContext(NewsContext);

  return (
    <div>
      {news.map(message => (
        <li className="goals__row">
          <div className="goal">
            <div className="form__field--input">
              <div className="form__input-suffix">
                <button type="button" className="button">
                  <img src={deletebut} alt="delete" />
                </button>
              </div>
            </div>
            <h3 className="heading3">{message.title}</h3> <p>{message.text}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
