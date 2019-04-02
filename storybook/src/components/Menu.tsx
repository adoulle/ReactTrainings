import React from "react";
import AppContext from "../AppContext";
import { MenuList } from "./MenuList";
import { AddButton } from "./AddButton";

const Menu: React.FunctionComponent = () => {
  return (
    <div>
      <AddButton />
      <MenuList />
    </div>
  );
};

export default Menu;
