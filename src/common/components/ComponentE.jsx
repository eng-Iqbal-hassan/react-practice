import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

export class ComponentE extends Component {
  // if application support public class view syntax then ComponentE.contextType can be replaced by the syntax given below
  static contextType = UserContext;
  // the context  type is simpler, why we should not stick to the contextType only
  // this thing has two limitation
  // (1): this thing is applicable to the class components only
  // (2): you can subscribe to the single context using {this.context} many a times we need multiple context for which we need userConsumer. In an example, in the ThemeContext.consumer in the function body  there is  UserContext.consumer the parameter of both are used in the component which is inside the second component

  render() {
    return (
      <div>
        Component E Context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
