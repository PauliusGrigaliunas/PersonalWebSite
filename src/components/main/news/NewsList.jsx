import React, { useState } from "react";

export default function NewsList() {
  const [news, setNews] = useState([
    {
      title: "Pradžia",
      text: "Čia yra pirmasis testinis tekstas",
      id: 1
    },
    {
      title: "Antroji ivęstis",
      text: "Čia yra antrasis testinis tekstas",
      id: 2
    }
  ]);

  return (
    <div>
      {news.map(movie => (
        <li className="goals__row">
          <div className="goal">
            <h3 className="heading3">{movie.title}</h3>
            <p>{movie.text}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
