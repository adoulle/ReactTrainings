import React from "react";
import AppContext, { useStateValue } from "./Context/AppContext";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import AddButton from "./AddButton";
import AccueilButton from "./AccueilButton";

type Props = { linkPath: string; linkLabel: string };

const MenuElement = (props: Props) => {
  return (
    <Link to={props.linkPath}>
      <ListItem button key={props.linkLabel}>
        <ListItemText primary={props.linkLabel} />
      </ListItem>
    </Link>
  );
};

export const LeftMenu: React.FunctionComponent = () => {
  const [tet, dispatch] = useStateValue();

  return (
    <>
      <AccueilButton />
      <Divider />
      <AddButton name={"Add"} path={"/add"} />
      <Divider />
      <AddButton name={"Add Redux"} path={"/addRedux"} />
      <Divider />
      <List>
        {tet.componentList.map(e => (
          <MenuElement
            linkPath={`/component/${e.name}`}
            linkLabel={`${e.name}`}
          />
        ))}
        <MenuElement linkPath={"/redux"} linkLabel={"Redux Test"} />
        <MenuElement linkPath={"/useReducer"} linkLabel={"Use Reducer Test"} />
      </List>
    </>
  );
};

export default LeftMenu;
