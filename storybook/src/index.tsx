import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import AppContext, { ComponentList, IComponentInfo } from "./AppContext";
import "./styles.css";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { FormAdd } from "./components/FormAdd";
import { PageMainContent } from "./components/PageMainContent";
import { GenericComponent } from "./components/GenericComponent";

class App extends React.Component<{}, ComponentList> {
  state = {
    components: [{ name: "test1", path: "" }, { name: "test1", path: "" }],
    selectedPath: "",
    history: createBrowserHistory(),
    add: (comp: IComponentInfo) => {
      this.setState({
        components: [...this.state.components, comp]
      });
    }
  };

  render() {
    return (
      <Router history={this.state.history}>
        <AppContext.Provider value={this.state}>
          <Menu />
          <Route path="/add" component={FormAdd} />
          <Route
            path={`/component/:componentPath`}
            component={GenericComponent}
          />
          <PageMainContent />
        </AppContext.Provider>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
