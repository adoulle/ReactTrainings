import * as React from "react";

const SimpleExample = () => {
  return <SimpleComp initVal={1} name={"test 4 add"} />;
};

type IPROPS = { name: string; initVal: number };
type ISTATE = { value: number; value2: string };

class SimpleComp extends React.Component<IPROPS, ISTATE> {
  state: ISTATE = {
    value: this.props.initVal,
    value2: "this.props.initVal"
  };

  myclick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        <span>{"example4"}</span>
        <br />
        <div>{this.state.value}</div>
        <button onClick={this.myclick}>{this.props.name}</button>
      </>
    );
  }
}

export default SimpleExample;
