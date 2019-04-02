import AppContext, { IComponentInfo } from "../AppContext";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const ListItem: FunctionComponent<{
  element: IComponentInfo;
}> = (props: { element: IComponentInfo }) => {
  return (
    <Link to={`/component/${props.element.name}`}>{props.element.name}</Link>
  );
};
