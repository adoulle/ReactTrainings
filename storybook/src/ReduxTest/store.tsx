import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import reducers, { TrainingState } from "./Reducer";

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
