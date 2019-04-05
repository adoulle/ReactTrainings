const NAMESPACE = "@TRAININGS/";

export const INCREMENTS = `${NAMESPACE}INCREMENTS`;
export interface Increments {
  type: typeof INCREMENTS;
}

export const DECREMENTS = `${NAMESPACE}DECREMENTS`;
export interface Decrements {
  type: typeof DECREMENTS;
}

export const increments: Increments = { type: INCREMENTS };

export const decrements: Decrements = { type: DECREMENTS };

export type TrainingActions = Increments | Decrements;
