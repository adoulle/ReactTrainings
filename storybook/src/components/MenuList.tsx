import React from "react";
import AppContext from "../AppContext";
import { ListItem } from "./ListItem";

export const MenuList = () => {
  return (
    <AppContext.Consumer>
      {value => {
        value.components.map(e => {
          return <ListItem element={e} />;
        });
        return "toto";
      }}
    </AppContext.Consumer>
  );
};
