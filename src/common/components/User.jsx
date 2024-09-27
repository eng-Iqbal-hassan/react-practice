import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      // we want to see how to execute the render props to get the shared properties to avoid repeating of the functionality
      //   <div>Iqbal</div>
      //   let us do in small steps instead of getting hard quoted name we get the name from props
      //   <div>{this.props.name}</div>
      //   <div>{this.props.name()}</div>
      //   <div>{this.props.name(true)}</div>
      <div>{this.props.render(false)}</div>
    );
  }
}

export default User;
