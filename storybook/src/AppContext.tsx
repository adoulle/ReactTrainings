import * as React from "react";
import { createBrowserHistory, History } from "history";

export interface IComponentInfo {
  name: string;
  path: string;
}

export interface ComponentList {
  components: IComponentInfo[];
  selectedPath: string;
  history: History<any>;
  add(newelement: IComponentInfo): void;
}

export default React.createContext<ComponentList>({
  components: [],
  selectedPath: "",
  history: createBrowserHistory(),
  add: () => {}
});
