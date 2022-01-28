function createStore(reducer) {
  let currentState;
  let listeners = [];
  function dispatch(action) {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener(currentState));

    return currentState;
  }
  function getState() {
    return currentState;
  }
  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  dispatch({
    type: "INIT",
  });

  return {
    dispatch,
    getState,
    subscribe,
  };
}

export default createStore;
