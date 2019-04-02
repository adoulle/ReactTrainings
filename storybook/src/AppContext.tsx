import * as React from "react";

export interface IComponentInfo {
  name: string;
  path: string;
}

export interface ComponentList {
  components: IComponentInfo[];
  selectedPath: string;

  add(newelement: IComponentInfo): void;

  // public Add(comp: IComponentInfo): ComponentList {
  //   const newList: ComponentList;
  //   newList.components.push(...this.components);
  //   newList.components.push(comp);
  //   newList.selectedPath = this.selectedPath;
  //   return newList;
  // }
}

export default React.createContext<ComponentList>({
  components: [],
  selectedPath: "",
  add: () => {}
});
