function combineReducers(reducers) {
  return (state = {}, action) => {
    const rootState = {};
    Object.keys(reducers).forEach((key) => {
      const stateForKey = reducers[key](state[key], action);
      rootState[key] = stateForKey;
    });
    return rootState;
  };
}

export default combineReducers;
