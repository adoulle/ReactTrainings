import * as React from "react";

const SimpleExample = () => {
  const [state, setState] = React.useState(defaultValue);
  return <SimpleComp init={state.value} name={"name"} />;
};

type IPROPS = { name: string; init: number };
type ISTATE = { value: number };

const defaultValue: ISTATE = { value: 0 };

const SimpleComp = (props: IPROPS) => {
  const [state, setState] = React.useState({ value: props.init });
  const myclick = () => {
    setState({ value: state.value + 1 });
  };

  return (
    <>
      <span>{"example5"}</span>
      <br />
      <div>{state.value}</div>
      <button onClick={myclick}>{props.name}</button>
    </>
  );
};

export default SimpleExample;
