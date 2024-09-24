import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import Memo from "./Memo";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "iqbal",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Iqbal",
      });
    }, 2000);
  }

  render() {
    console.log("rendering parent component");
    return (
      <div>
        <Memo name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
      //   it is observed that pure component is not rendered again and again because it follows the shouldComponentUpdate method and update with a shallow prop and state comparison
    );
  }
}

export default ParentComp;
