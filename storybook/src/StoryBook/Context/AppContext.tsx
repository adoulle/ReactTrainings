import * as React from "react";
import { createBrowserHistory, History } from "history";
import {
  StoryBookReducer,
  StoryBookActions,
  StoryBookReducerType
} from "./StoryBookActions";
import { defaultState } from "../../ReduxTest/Reducer";

export const DefaultStoryBookState: StoryBookState = {
  componentList: [
    { name: "Button", path: "./AddButton" },
    { name: "Menu", path: "./LeftMenu" }
  ],
  selection: "",
  history: createBrowserHistory()
};

export interface ComponentInfo {
  name: string;
  path: string;
}

export interface StoryBookState {
  componentList: ComponentInfo[];
  selection: string;
  history: History<any>;
}

export const AppContext = React.createContext<
  [StoryBookState, React.Dispatch<StoryBookActions>]
>([DefaultStoryBookState, () => {}]);

export const AppStateProvider = (props: {
  reducer: StoryBookReducerType;
  initialState: StoryBookState;
  children: JSX.Element;
}) => {
  return (
    <AppContext.Provider
      value={React.useReducer(props.reducer, props.initialState)}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useStateValue = () => React.useContext(AppContext);
export default AppContext;
