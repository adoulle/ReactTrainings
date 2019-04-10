import React, { Component } from "react";
import { increments, decrements } from "./Actions";
import store from "./store";
import { TrainingState, defaultState } from "./Reducer";
import { connect } from "react-redux";
import Results from "./Results";

store.subscribe(() => console.log(store.getState()));

interface ReduxAppProps {
  increments?: () => void;
  decrements?: () => void;
  currentState: TrainingState;
}

class ReduxApp extends Component<ReduxAppProps, TrainingState> {
  render() {
    return (
      <>
        <Results value={this.props.currentState} />
        <button onClick={this.props.decrements}>-</button>
        <button onClick={this.props.increments}>+</button>
      </>
    );
  }
}

const mapStateToProps = (state: TrainingState) => ({
  currentState: state
});

export default connect(
  mapStateToProps,
  {
    increment: increments,
    decrements
  }
)(ReduxApp);
