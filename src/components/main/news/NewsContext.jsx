import React, { useState, createContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = props => {
  const [news, setNews] = useState([
    {
      title: "Pradžia",
      text: "Čia yra pirmasis testinis tekstas",
      id: 1
    },
    {
      title: "Antroji ivestis",
      text: "Čia yra antrasis testinis tekstas",
      id: 2
    }
  ]);
  return (
    <NewsContext.Provider value={[news, setNews]}>
      {props.children}
    </NewsContext.Provider>
  );
};
