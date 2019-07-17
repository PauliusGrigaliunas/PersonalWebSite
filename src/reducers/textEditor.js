const textReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXTEDIT":
      return state + action.payload;
    default:
      return state;
  }
};
export default textReducer;
