import React, { Component } from "react";
import ReactDOM from "react-dom";
import material from "@material-ui/core";
import Button from "./components/button";
import Menu from "./components/Menu";
import AppContext, { IComponentList } from "./AppContext";
import "./styles.css";

function App() {
  const componentList: IComponentList = { component: [], selectedPath: "" };
  return (
    <AppContext.Provider value={componentList}>
      <Menu />
      <ComponentRender />
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
