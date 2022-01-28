import { useEffect, useState } from "react";
import ReactReduxContext from "./reactReduxContext";

function Provider({ store, children }) {
  // const [_, setState] = useState(0);
  // useEffect(() => {
  //   return store.subscribe(() => {
  //     setState(_ + 1);
  //   });
  // }, [_]);
  return (
    <ReactReduxContext.Provider value={{ store }}>
      {children}
    </ReactReduxContext.Provider>
  );
}

export default Provider;
