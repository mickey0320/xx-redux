export function bindActionCreators(dispatch, actionCreators) {
  return Object.keys(actionCreators).reduce((memo, key) => {
    memo[key] = function (...args) {
      return dispatch(actionCreators[key](...args));
    };

    return memo;
  }, {});
}

export function bindActionCreator(dispatch, actionCreator) {
  return (...args) => {
    dispatch(actionCreator(...args));
  };
}
