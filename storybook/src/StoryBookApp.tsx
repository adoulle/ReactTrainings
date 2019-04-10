import React, { Component } from "react";
import AppContext, {
  StoryBookState,
  ComponentInfo,
  DefaultStoryBookState,
  AppStateProvider
} from "./StoryBook/Context/AppContext";
import "./StoryBook/styles.css";
import { Router, Route, Switch, Redirect } from "react-router";
import FormAdd from "./StoryBook/FormAdd";
import GenericComponent from "./StoryBook/GenericComponent";
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
import { Error404 } from "./StoryBook/ErrorComponent";
import { LeftMenu } from "./StoryBook/LeftMenu";
import ReduxTest from "./ReduxTest/ReduxTest";
import UseReducer from "./UseReducer/UseReducer";
import FormAddWithRedux from "./StoryBook/FormAddWithRedux";
import { StoryBookReducer } from "./StoryBook/Context/StoryBookActions";

class StoryBookApp extends React.Component<
  WithStyles<typeof DrawerStyle>,
  StoryBookState
> {
  fromValues = DefaultStoryBookState;

  // state = {
  //   componentList: [
  //     { name: "Button", path: "./AddButton" },
  //     { name: "Menu", path: "./LeftMenu" }
  //   ],
  //   selection: "",
  //   history: createBrowserHistory(),
  //   add: (comp: ComponentInfo) => {
  //     this.setState({
  //       componentList: [...this.state.componentList, comp]
  //     });
  //   },
  //   selectPath: (name: string) => {
  //     const value = this.state.componentList.find(c => c.name == name);
  //     const newPath = value ? value.path : "";
  //     if (newPath != "" && this.state.selection != name) {
  //       this.setState({
  //         selection: name
  //       });
  //     }
  //     return newPath;
  //   }
  // };

  render() {
    return (
      <AppStateProvider
        initialState={this.fromValues}
        reducer={StoryBookReducer}
      >
        <Router history={this.fromValues.history}>
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
                <Route path="/add">
                  <FormAdd />
                </Route>
                <Route path="/addRedux">
                  <FormAddWithRedux />
                </Route>
                <Route path="/Redux" component={ReduxTest} />
                <Route path="/useReducer" component={UseReducer} />
                <Route
                  path={`/component/:componentName`}
                  render={({ match }) => (
                    <GenericComponent
                      path={this.fromValues.selectPath(
                        match.params.componentName
                      )}
                    />
                  )}
                />
                <Route path="/" exact={true} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      </AppStateProvider>
    );
  }
}

export default withStyles(DrawerStyle)(StoryBookApp);
