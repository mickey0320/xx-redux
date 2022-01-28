import { ADD_FOR_MODULE2, MINUS_FOR_MODULE2 } from "../constants";

const defaultState = {
  count: 1,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FOR_MODULE2:
      return {
        count: state.count + action.payload,
      };
    case MINUS_FOR_MODULE2:
      return {
        count: state.count - action.payload,
      };
  }
  return state;
};
