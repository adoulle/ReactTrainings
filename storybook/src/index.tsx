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
    components: [
      { name: "button", path: "./AddButton" },
      { name: "Menu", path: "./Menu" }
    ],
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
      <AppContext.Provider value={this.state}>
        <Router history={this.state.history}>
          <Menu />
          <PageMainContent />
          <Route path="/add" component={FormAdd} />
          <Route
            path={`/component/:componentName`}
            render={({ match }) => (
              <GenericComponent componentName={match.params.componentName} />
            )}
          />
        </Router>
      </AppContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
