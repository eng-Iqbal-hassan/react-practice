import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("rendering pure component");
    return (
      <div>pure component {this.props.name}</div>
      //   pure component is looking same as that of regular component one difference that is looking that instead of component from react pure component is imported and it is used in making class component
      // so what is the major difference between regular component and pure component and when to use one over the other?
    );
  }
}

export default PureComp;
