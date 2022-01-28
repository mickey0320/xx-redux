import { ADD_FOR_MODULE2, MINUS_FOR_MODULE2 } from "./constants";

export function add(payload) {
  return {
    type: ADD_FOR_MODULE2,
    payload,
  };
}

export function minus(payload) {
  return {
    type: MINUS_FOR_MODULE2,
    payload,
  };
}
