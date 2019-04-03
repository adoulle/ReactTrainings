import React, { Component } from "react";
import AppContext, { ComponentList, IComponentInfo } from "./AppContext";
import "./styles.css";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { FormAdd } from "./components/FormAdd";
import { GenericComponent } from "./components/GenericComponent";
import {
  WithStyles,
  withStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider
} from "@material-ui/core";

import { DrawerStyle } from "./Style/AppStyles";
import Error404 from "./components/Error404";
import { LeftMenu } from "./components/LeftMenu";

class App extends React.Component<
  WithStyles<typeof DrawerStyle>,
  ComponentList
> {
  state = {
    components: [
      { name: "Button", path: "./AddButton" },
      { name: "Menu", path: "./LeftMenu" }
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
          <div className={this.props.classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={this.props.classes.appBar}>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Our storybook qui rocks
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={this.props.classes.drawer}
              variant="permanent"
              classes={{
                paper: this.props.classes.drawerPaper
              }}
              anchor="left"
            >
              <LeftMenu />
              <Divider />
            </Drawer>
            <main className={this.props.classes.content}>
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
            </main>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default withStyles(DrawerStyle)(App);
