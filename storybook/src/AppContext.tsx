import * as React from "react";
import { createBrowserHistory, History } from "history";

export interface IComponentInfo {
  name: string;
  path: string;
}

export interface ComponentList {
  components: IComponentInfo[];
  selection: string;
  history: History<any>;
  add(newelement: IComponentInfo): void;
  selectPath(path: string): string;
}

export default React.createContext<ComponentList>({
  components: [],
  selection: "",
  history: createBrowserHistory(),
  add: () => {},
  selectPath: () => {
    return "";
  }
});
