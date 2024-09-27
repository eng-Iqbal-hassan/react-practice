import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log("count", count);
    return <h1 onMouseOver={incrementCount}>hover {count} times</h1>;
  }
}

export default HoverCounterTwo;
