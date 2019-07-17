import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, textEdit } from "../../../actions";

export default function Comment() {
  const counter = useSelector(state => state.counter);
  const textEditor = useSelector(state => state.textEditor);
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <h3 className="heading3">Komentaro pavadinimas</h3>
      <p>
        Komentaro pavyzdys {counter} {textEditor}
      </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(textEdit("labas"))}>add text</button>
    </div>
  );
}
