import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import reducers, { TrainingState } from "./Reducer";

export default createStore(reducers, applyMiddleware(thunk));
