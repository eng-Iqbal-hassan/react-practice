import React, { Component } from "react";
import withCounter from "./WithCounter";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>hover {count} time</h1>
      </div>
      //   in both hover counter and click counter, the functionality  is same if there are 10 elements the functionality is repeated 10times, the idea is that write the functionality once in parent component and state and  onclick or mouseover behavior is passed as prop to the child component. This thing is suitable for the condition in which hover and click counter are the child of same parent component. but if the components are scattered in the react component tree, lifting the state is not the solution. so there is need to share the common functionality without repeating the code, there comes up the concept of higher order components.
      // HOC is implemented on both hover counter and increment counter
      // HOC is the updatedComponent function which take the originalComponent  as argument and gives the new component  in the new component  all the functionalities which need not to be repeated is applied and it returns the original component tag in which the functionality is passed as prop to the respective child component
      // Final step is that this updatedComponent is imported to the child component and this component is not directly exported but the updatedComponent function which is carrying this child is  exported in this child component file.
    );
  }
}

export default withCounter(HoverCounter, 10);
0;
