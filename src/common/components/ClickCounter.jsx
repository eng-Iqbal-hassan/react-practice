import React, { Component } from "react";
import withCounter from "./WithCounter";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>
          {this.props.name} click {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
