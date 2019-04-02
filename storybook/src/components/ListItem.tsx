import AppContext, { IComponentInfo } from "../AppContext";

export const ListItem = (props: { element: IComponentInfo }) => {
  return <div>{props.element.name}</div>;
};
