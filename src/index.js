import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "./redux";
import { Provider, useDispatch, useSelector } from "./react-redux";

import store from "./store";
import * as module1Actions from "./store/module1Actions";
import * as module2Actions from "./store/module2Actions";

function Counter1() {
  console.log("count1");
  const count = useSelector((state) => state.module1.count);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(module1Actions.asyncAdd(1))}>{count}</div>
  );
}
// const Counter = React.memo(Counter1);

function Counter2() {
  console.log("count2");
  const count = useSelector((state) => state.module2.count);
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(module2Actions.add(1))}>{count}</div>;
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  </Provider>,
  document.getElementById("root")
);
