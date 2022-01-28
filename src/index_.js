import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";

function Counter1() {
  const [count, setCount] = useState(0);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

function Counter2({ num }) {
  console.log("count2 render");
  const [count, setCount] = useState(0);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

const Counter22 = React.memo(Counter2);

function App() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <>
      <button onClick={() => forceUpdate()}>update</button>
      <span>{Math.random()}</span>
      <Counter1 />
      <Counter22 />
    </>
  );
}

ReactDOM.render(
  // <div>
  //   <span>{Math.random()}</span>
  //   <Counter1 />
  //   <Counter2 num={Math.random()} />
  // </div>,
  <App />,
  document.getElementById("root")
);
