import AppContext, { IComponentInfo } from "../AppContext";
import React, { FunctionComponent } from "react";

export const ListItem: FunctionComponent<{
  element: IComponentInfo;
}> = (props: { element: IComponentInfo }) => {
  return <div>{props.element.name}</div>;
};
