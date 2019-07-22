const textReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXTEDIT":
      return action.payload;
    case "ISEMPTY":
      return action.payload;
    case "ISONLIST":
      return action.payload;
    default:
      return state;
  }
};
export default textReducer;
