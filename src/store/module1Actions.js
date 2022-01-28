import { ADD_FOR_MODULE1, MINUS_FOR_MODULE1 } from "./constants";

export function add(payload) {
  return {
    type: ADD_FOR_MODULE1,
    payload,
  };
}

export function minus(payload) {
  return {
    type: MINUS_FOR_MODULE1,
    payload,
  };
}

export function asyncAdd(payload) {
  return ({ dispatch }) => {
    setTimeout(() => {
      dispatch(add(payload));
    }, 1000);
  };
}
