import React, { useReducer } from "react";
import { increments, decrements } from "./Actions";
import training, { defaultState } from "./Reducer";
import Results from "./Results";

export default () => {
  const [state, dispatch] = useReducer(training, defaultState);
  return (
    <>
      <Results value={state} />
      <button onClick={() => dispatch(decrements)}>-</button>
      <button onClick={() => dispatch(increments)}>+</button>
    </>
  );
};
