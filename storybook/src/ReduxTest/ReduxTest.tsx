import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReduxApp from "./ReduxApp";

export default () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};
