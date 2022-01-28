import { createStore, combineReducers, applyMiddleware } from "../redux";
// import thunk from "redux-thunk";
import thunk from "../redux/redux-thunk";

import reducer1 from "./reducers/module1";
import reducer2 from "./reducers/module2";
const reducer = combineReducers({
  module1: reducer1,
  module2: reducer2,
});

const store = applyMiddleware(thunk)(createStore, reducer);

export default store;
