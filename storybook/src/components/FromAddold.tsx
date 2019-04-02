import React from "react";
import { IComponentInfo } from "../AppContext";

export interface IAddComponent {
  add(value: IComponentInfo): boolean;
}

export const FromAdd = (add: IAddComponent) => {
  const value: IComponentInfo = { name: "", path: "" };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.name = e.target.value;
  };

  const pathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.name = e.target.value;
  };

  const triggerAdd = () => {
    this.props.add(value);
  };

  return (
    <div>
      name : <input type="text" name="todoTitle" onChange={this.titleChange} />
      <br />
      path :{" "}
      <input type="text" name="todoContent" onChange={this.contentChange} />
      <br />
      <button onClick={this.triggerAdd()}>add</button>
    </div>
  );
};
