import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    this.inputRef.current.focus();
    // As soon as the page  is loaded the specific input is focused so the user can start with this input
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
    console.log(this.inputRef);
  }

  handleBtnClick = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* Ref makes it possible that we can access the dom node directly within the react */}
        {/* the thing we want to achieve is that as soon as the page is loaded the specific input is focussed   */}
        {/* the above mention thing can be achieved with the help of refs  */}
        {/* this thing is done in three simple steps  */}
        {/* (1): create the ref by React.ref this thing is done in the constructor */}
        {/* (2): this input ref is given to the input by reserved ref attribute  */}
        {/* (3): One last step is to run focus method on current value which is this.inputRef.current.value() */}
        {/* by all these steps the ref is created  */}
        <button onClick={this.handleBtnClick}>click</button>
        {/* whatever the user has written in the input, when the user is clicked on
        to it, then the same thing is shown in the alert */}
        {/* in shot summary by ref we have access the dom node directly  */}

        {/* One more way to create the ref which is the older one is mentioned below which is call back refs  */}
        {/* this thing is comprises of four steps 
        (1): create a cbRef which is given the value null
        (2): a setCbRef arrow function is created which is given the element as parameter cbRef value is set to that element
        (3): the input element is given the attribute ref on which this function is assigned as value
        (4): when the component is mounted then the cbRef value is element and when the component is unmounted then the value  is unmounted then the value is null . so a check is required. 
        if (this.cbRef) means that if cbRef value does exist then the focus method is applied and it is observed that this method is applied directly without the current */}
        <input type="text" ref={this.setCbRef} />
      </div>
      //   ref-variable is created which is given the value null and a method is defined in which ref-variable is given the value of element in the specific input that ref prop is given the method in which the value is stored in componentDidMount focus method is applied on this.ref-variable directly
    );
  }
}

export default RefsDemo;
