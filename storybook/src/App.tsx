import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import AppContext, { ComponentList, IComponentInfo } from "./AppContext";
import "./styles.css";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { FormAdd } from "./components/FormAdd";
import { GenericComponent } from "./components/GenericComponent";
import { Grid, WithStyles, withStyles } from "@material-ui/core";
import { AppStyle } from "./Style/AppStyles";
import ErrorComponent from "./components/ErrorComponent";
import Error404 from "./components/Error404";

class App extends React.Component<WithStyles<typeof AppStyle>, ComponentList> {
  state = {
    components: [
      { name: "button", path: "./AddButton" },
      { name: "Menu", path: "./Menu" }
    ],
    selection: "",
    history: createBrowserHistory(),
    add: (comp: IComponentInfo) => {
      this.setState({
        components: [...this.state.components, comp]
      });
    },
    selectPath: (name: string) => {
      const value = this.state.components.find(c => c.name == name);
      const newPath = value ? value.path : "";
      if (newPath != "" && this.state.selection != name) {
        this.setState({
          selection: name
        });
      }
      return newPath;
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
              <Switch>
                <Route path="/add" component={FormAdd} />
                <Route
                  path={`/component/:componentName`}
                  render={({ match }) => (
                    <GenericComponent
                      path={this.state.selectPath(match.params.componentName)}
                    />
                  )}
                />
                <Route path="/" exact={true} />
                <Route component={Error404} />
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default withStyles(AppStyle)(App);
