import React from "react";

const SimpleExample: React.FunctionComponent = () => {
  return <LocalComp name={"addition"} />;
};

// const LocalComp: React.FunctionComponent<{ name: string }> = (props: { name: string }) => {
export const LocalComp = (props: { name: string }) => {
  return (
    <>
      <span>{"example2"}</span>
      <br />
      <button>{props.name}</button>
    </>
  );
};

export default SimpleExample;
