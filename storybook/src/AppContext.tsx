import * as React from "react";

export interface IComponentInfo {
  name: string;
  path: string;
}

export interface IComponentList {
  components: IComponentInfo[];
  selectedPath: string;
}

export default React.createContext<IComponentList | null>(null);
