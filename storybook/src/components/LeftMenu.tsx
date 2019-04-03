import React from "react";
import AppContext from "../AppContext";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import AddButton from "./AddButton";
import AccueilButton from "./AccueilButton";

export const LeftMenu = () => {
  return (
    <AppContext.Consumer>
      {ctx => (
        <>
          <AccueilButton />
          <Divider />
          <AddButton />
          <Divider />
          <List>
            {ctx.components.map(e => (
              <Link to={`/component/${e.name}`}>
                <ListItem button key={`${e.name}`}>
                  <ListItemText primary={`${e.name}`} />
                </ListItem>
              </Link>
            ))}
          </List>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default LeftMenu;
