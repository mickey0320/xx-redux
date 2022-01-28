import { useContext } from "react";
import reactReduxContext from "../reactReduxContext";

function useDispatch() {
  const { store } = useContext(reactReduxContext);

  return store.dispatch;
}

export default useDispatch;
