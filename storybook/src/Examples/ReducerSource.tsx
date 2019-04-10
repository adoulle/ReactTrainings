import { useState } from "react";

function userReducer<T, U>(
  reducer: (state: T, action: U) => T,
  initialState: T
): [T, (action: U) => void] {
  const [state, setState] = useState(initialState);

  const dispatch: (action: U) => void = (action: U) => {
    const newState: T = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
}

interface ActionType {
  type: "INC" | "DEC";
}

const Component = () => {
  function reducer(state: number, action: ActionType): number {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
    }
    return state;
  }

  const [state, dispatch]: [
    number,
    ((action: ActionType) => void)
  ] = userReducer(reducer, 0);
  dispatch({ type: "INC" });
  dispatch({ type: "INC" });
};
