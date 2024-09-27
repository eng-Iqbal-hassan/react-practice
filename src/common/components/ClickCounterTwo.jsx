import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>click {count} times</button>;
    // same is the scenario which is resolved by higher order component. The other way to solve  it is render props
    // there is need to share the common functionality between the components.
  }
}

export default ClickCounterTwo;
