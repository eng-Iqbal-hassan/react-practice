import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// this is our higher order component
// this is a pattern  in which function accepts the original component and  return the new component
