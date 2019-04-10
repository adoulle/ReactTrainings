import { useState, useContext, useReducer, Component } from "react";
import { createStore } from "redux";
import React from "react";
import reducer, { TrainingState, defaultState } from "./Reducer";
import { connect } from "react-redux";
import { increments, decrements } from "./Actions";

export default (props: { value: TrainingState }) => {
  return <div>{`result :${props.value.currentValue}`}</div>;
};
