import React from "react";

const SimpleExample = () => {
  return <SimpleComp />;
};

class SimpleComp extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <span>{"example3"}</span>
        <br />
        <button>add</button>
      </>
    );
  }
}

export default SimpleExample;
