import React, { useState, useContext } from "react";
import { NewsContext } from "./NewsContext";

export default function AddNew() {
  const [title, settitle] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [News, setNews] = useContext(NewsContext);

  const updateTitle = e => {
    settitle(e.target.value);
  };

  const updateParagraph = e => {
    setparagraph(e.target.value);
  };

  const addNew = e => {
    e.preventDefault();
    setNews(prevNews => [...prevNews, { title: title, text: paragraph }]);
  };

  return (
    <form onSubmit={addNew}>
      <input type="text" name="title" value={title} onChange={updateTitle} />
      <input
        type="text"
        name="paragraph"
        value={paragraph}
        onChange={updateParagraph}
      />
      <button>Submit</button>
    </form>
  );
}
