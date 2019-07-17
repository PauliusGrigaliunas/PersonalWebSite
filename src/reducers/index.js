import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import textReducer from "./textEditor";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  textEditor: textReducer
});
export default allReducers;
