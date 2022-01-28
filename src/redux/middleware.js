import compose from "./compose";

function applyMiddleware(...fns) {
  return (createStore, reducer) => {
    const store = createStore(reducer);
    let dispatch;
    const middlewareAPI = {
      getState: store.getState,
      dispatch(action) {
        return dispatch(action);
      },
    };
    fns = fns.map((fn) => {
      return fn(middlewareAPI);
    });
    dispatch = compose(...fns)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

export default applyMiddleware;
