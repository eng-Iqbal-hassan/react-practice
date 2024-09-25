import React, { Component } from "react";

export class RegularComp extends Component {
  render() {
    console.log("rendering regular component");
    return <div>regular component {this.props.name}</div>;
  }
}

export default RegularComp;
