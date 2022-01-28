import { ADD_FOR_MODULE1, MINUS_FOR_MODULE1 } from "../constants";

const defaultState = {
  count: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FOR_MODULE1:
      return {
        count: state.count + action.payload,
      };
    case MINUS_FOR_MODULE1:
      return {
        count: state.count - action.payload,
      };
  }
  return state;
};
