import {
  StoryBookState,
  DefaultStoryBookState,
  ComponentInfo
} from "./AppContext";

export const ADDCOMPONENT = `ADDCOMPONENT`;
export interface AddComponant {
  type: typeof ADDCOMPONENT;
  componentInfo: ComponentInfo;
}

export function ComponantAdder(componentInfc: ComponentInfo) {
  const componant: AddComponant = {
    type: ADDCOMPONENT,
    componentInfo: componentInfc
  };
  return componant;
}

export type StoryBookActions = AddComponant;

export type StoryBookReducerType = (
  state: StoryBookState,
  action: StoryBookActions
) => StoryBookState;

export function StoryBookReducer(
  state: StoryBookState = DefaultStoryBookState,
  action: StoryBookActions
): StoryBookState {
  switch (action.type) {
    case ADDCOMPONENT:
      return {
        ...state,
        componentList: [...state.componentList, action.componentInfo]
      };
    default:
      return state;
  }
}
