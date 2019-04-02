import * as React from "react";

export interface IComponentInfo {
  name: string;
  path: string;
}

export class ComponentList {
  constructor() {}
  public components: IComponentInfo[] = [];
  public selectedPath: string = "";

  public Add(comp: IComponentInfo): ComponentList {
    this.components.push(comp);
    new ComponentList();
    return new ComponentList();
  }
}

export default React.createContext<ComponentList>(new ComponentList());
