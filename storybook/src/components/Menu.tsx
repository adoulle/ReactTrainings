import React from "react";
import AppContext from "../AppContext";
import LeftMenu from "./LeftMenu";
import { AddButton } from "./AddButton";

const Menu: React.FunctionComponent = () => {
  return (
    <div>
      <AddButton />
      <LeftMenu />
    </div>
  );
};

export default Menu;
