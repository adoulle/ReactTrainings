import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export const increments = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => dispatch => {
  dispatch({ type: INCREMENTS });
};

export const decrements = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => dispatch => {
  dispatch({ type: DECREMENTS });
};

const NAMESPACE = "@TRAININGS/";

export const INCREMENTS = `${NAMESPACE}INCREMENTS`;
export interface Increments {
  type: typeof INCREMENTS;
}

export const DECREMENTS = `${NAMESPACE}DECREMENTS`;
export interface Decrements {
  type: typeof DECREMENTS;
}

export type TrainingActions = Increments | Decrements;
