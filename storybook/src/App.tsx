import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import AppContext, { ComponentList, IComponentInfo } from "./AppContext";
import "./styles.css";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { FormAdd } from "./components/FormAdd";
import { GenericComponent } from "./components/GenericComponent";
import { Grid, WithStyles, withStyles } from "@material-ui/core";
import { AppStyle } from "./Style/AppStyles";

class App extends React.Component<WithStyles<typeof AppStyle>, ComponentList> {
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
          <Grid className={this.props.classes.gridRoot}>
            <Grid item xs={2}>
              <Menu />
            </Grid>
            <Grid item xs={10}>
              <Route path="/add" component={FormAdd} />
              <Route
                path={`/component/:componentName`}
                render={({ match }) => (
                  <GenericComponent
                    componentName={match.params.componentName}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default withStyles(AppStyle)(App);
