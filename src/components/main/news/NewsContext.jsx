import React, { useState, createContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = props => {
  const [news, setNews] = useState([
    {
      title: "Pavyzdys",
      text: "Čia yra testinis tekstas",
      id: 1
    }
  ]);
  return (
    <NewsContext.Provider value={[news, setNews]}>
      {props.children}
    </NewsContext.Provider>
  );
};
