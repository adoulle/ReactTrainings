import { TrainingActions, INCREMENTS, DECREMENTS } from "./Actions";

export interface TrainingState {
  currentValue: number;
}

export const defaultState: TrainingState = {
  currentValue: 0
};

export default function training(
  state: TrainingState = defaultState,
  action: TrainingActions
): TrainingState {
  switch (action.type) {
    case INCREMENTS:
      return {
        ...state,
        currentValue: state.currentValue + 1
      };
    case DECREMENTS:
      return {
        ...state,
        currentValue: state.currentValue - 1
      };
    default:
      return state;
  }
}
