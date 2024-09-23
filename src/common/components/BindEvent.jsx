import React, { Component } from "react";

export class BindEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler = () => {
    this.setState({
      message: "good bye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.eventHandler()}>click</button> */}
        <button onClick={this.eventHandler}>click</button>
        {/* this keyword returns error in normal case which is: can not read property of undefined (reading setState)*/}
        {/* this is javascript concept  */}
        {/* this issue can be resolved in four ways 
        (1): Binding in render
        (2): Arrow  function in the render 
        (3): binding in the constructor
        (4): using arrow function for this.setState  */}
        {/* react suggest the 3rd or 4th as solution because these two do not create the performance issue
        in first two each  time the function is re-rendered when the component is called  */}
      </div>
    );
  }
}

export default BindEvent;
