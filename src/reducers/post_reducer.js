export default function (state = {}, action) {
  switch (action.type) {
    case "CLEAR_GET_POST":
      return { ...state, postItem: action.payload };
    case "GET_POST":
      return { ...state, postItem: action.payload };
    default:
      return state;
  }
}
