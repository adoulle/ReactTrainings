import React from "react";
import AppContext from "../AppContext";

const Menu: React.FunctionComponent = () => {
  return (
    <MenuAdd />
      <MenuList /> 
      {value => {
        console.log(value);
        return "toto";
      }}
  );
};

export default Menu;
