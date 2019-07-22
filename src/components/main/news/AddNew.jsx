import React, { useState, useContext } from "react";
import { NewsContext } from "./NewsContext";
import { useSelector, useDispatch } from "react-redux";
import { textEdit } from "../../../actions";

export default function AddNew() {
  const [title, settitle] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [news, setNews] = useContext(NewsContext);

  const warnMessage = useSelector(state => state.textEditor);
  const dispatch = useDispatch();

  const updateTitle = e => {
    settitle(e.target.value);
  };

  const updateParagraph = e => {
    setparagraph(e.target.value);
  };

  const addNew = e => {
    e.preventDefault();

    if (title === "") {
      dispatch(textEdit("nėra įvestas pavadinimas!"));
    } else if (news.filter(e => e.title === title).length > 0) {
      dispatch(textEdit(" įrašas su tokiu pavadinimu jau yra įvestas!"));
    } else {
      setNews(prevNews => [{ title: title, text: paragraph }, ...prevNews]);
      dispatch(textEdit());
    }
  };

  return (
    <form onSubmit={addNew} class="form">
      <div class="profile__section section">
        <div class="form__row">
          <div class="form__field">
            <label for="name" class="form__label">
              Pavadinimas
            </label>
            <input
              className="form__input"
              type="text"
              value={title}
              onChange={updateTitle}
            />
          </div>
        </div>
        <div class="form__row">
          <div class="form__field form__field--wide">
            <label for="text" class="form__label ">
              Naujiena
            </label>
            <input
              type="text"
              className="form__input"
              value={paragraph}
              onChange={updateParagraph}
            />
          </div>
        </div>

        <div class="form__row form__row--last">
          <div class="form__field">
            <button className="button--primary">Pateikti</button>
          </div>
          <div className="warning">{warnMessage}</div>
        </div>
      </div>
    </form>
  );
}
