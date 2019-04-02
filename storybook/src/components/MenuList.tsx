import React from "react";
import AppContext from "../AppContext";
import { ListItem } from "./ListItem";

export const MenuList = () => {
  return (
    <AppContext.Consumer>
      {ctx => (
        <ul>
          {ctx.components.map(e => (
            <li>
              <ListItem element={e} />
            </li>
          ))}
        </ul>
      )}
    </AppContext.Consumer>
  );
};
