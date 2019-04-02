import React, { Component } from "react";
import ReactDOM from "react-dom";
import material from "@material-ui/core";
import Menu from "./components/Menu";
import AppContext, { ComponentList, IComponentInfo } from "./AppContext";
import "./styles.css";

class App extends React.Component<{}, ComponentList> {
  state = {
    components: [{ name: "test1", path: "" }, { name: "test1", path: "" }],
    selectedPath: "",
    add: (comp: IComponentInfo) => {
      this.setState({
        components: [...this.state.components, comp]
      });
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Menu />
      </AppContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
