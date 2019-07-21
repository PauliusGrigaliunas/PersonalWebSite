import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import deletebut from "../../../images/delete.svg";

export default function NewsList() {
  const [news, setNews] = useContext(NewsContext);

  const removeNew = e => {
    e.preventDefault();
    var array = news;
    var index = array.indexOf(e.target.value);
    if (index !== -1) {
      array.splice(index, 1);
      setNews(array);
    }
  };

  return (
    <div>
      {news.map(message => (
        <li className="goals__row">
          <div className="goal">
            <div className="form__field--input">
              <div className="form__input-suffix">
                <button type="button" className="button" onSubmit={removeNew}>
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
