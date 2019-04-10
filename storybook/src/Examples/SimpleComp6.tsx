import * as React from "react";
import { Route, Router } from "react-router";
import { History, createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const SimpleExample = () => {
  const history: History<any> = createBrowserHistory();
  return <SimpleComp history={history} name={"test 6 +"} />;
};

type IPROPS = { name: string; history: History<any> };
type ISTATE = { value: number };

const defaultValue: ISTATE = { value: 0 };

const SimpleComp = (props: IPROPS) => {
  const [state, setState] = React.useState(defaultValue);

  const myclick = () => {
    setState({ value: state.value + 1 });
  };

  return (
    <>
      <BrowserRouter>
        <Route path="/add">
          <span>{"redirect"}</span>
        </Route>
        <Route path="/" exact={true} />
        <span>{"example6"}</span>
        <br />
        <div>{state.value}</div>
        <button onClick={myclick}>{props.name}</button>
      </BrowserRouter>
    </>
  );
};

export default SimpleExample;
