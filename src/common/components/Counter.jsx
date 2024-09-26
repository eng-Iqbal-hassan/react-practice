import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      //   the other way to use the render props while not even using props
      //   <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter;
