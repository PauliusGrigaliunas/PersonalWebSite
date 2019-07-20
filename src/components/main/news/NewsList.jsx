import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";

export default function NewsList() {
  const [news, setNews] = useContext(NewsContext);

  return (
    <div>
      {news.map(message => (
        <li className="goals__row">
          <div className="goal">
            <h3 className="heading3">{message.title}</h3>
            <p>{message.text}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
