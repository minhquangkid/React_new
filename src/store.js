import { createStore } from "redux";

const init = {
  num: 0,
};

const increaseReducer = (state = init, action) => {
  let newState;
  switch (action.type) {
    case "ADD":
      newState = {
        num: state.num + 1,
      };
      break;
    case "REMOVE":
      newState = {
        num: state.num - 1,
      };
      break;
    case "INCREASE":
      newState = {
        num: state.num + Number(action.payload),
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

const store = createStore(increaseReducer);

export default store;
