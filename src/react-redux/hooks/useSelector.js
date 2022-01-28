import React, { useContext, useEffect, useReducer, useRef } from "react";
import reactReduxContext from "../reactReduxContext";

function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    obj1 == null ||
    typeof obj1 !== "object" ||
    obj2 == null ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function useSelector(selector, equlityFn = shallowEqual) {
  const { store } = useContext(reactReduxContext);
  const [_, forupdate] = useReducer((x) => x + 1, 0);
  const state = store.getState();
  const selectedState = selector(state);
  const lastStateRef = useRef(selectedState);

  React.useLayoutEffect(() => {
    return store.subscribe(() => {
      const currentState = selector(store.getState());
      if (!equlityFn(currentState, lastStateRef.current)) {
        forupdate();
        lastStateRef.current = currentState;
      }
    });
  }, []);

  return selectedState;
}

export default useSelector;
