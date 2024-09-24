import React, { Component } from "react";
import "./MyStyles.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleCommentsChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">User name</label>
          {/* <input type="text" /> */}
          {/* such form components whose values are controlled by react are called controlled components  */}
          {/* till now the input is not a controlled component. It is made a controlled component in two steps */}
          {/* // first giving input a value */}
          {/* <input type="text" value={this.state.userName} /> */}
          {/* when this thing is run in the localhost it is  observed nothing is written inside the input because its value is set empty */}
          {/* Now it moves to the second step which is the handling of onChange event */}
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
          {/* now when the user enters something then onChange event handler is fired which is assigned handleUserNameChange */}
          {/* handleUserNameChange is given the parameter event and from this parameter we extract the value of the change by  event.target.value  */}
          {/* event.target.value is given in the setState to update the state each time change appears  */}
          {/* the difference is that we now working with controlled component and react state is the single source of the change  */}
        </div>
        {/* for the text area the process is as follows  */}
        <div>
          <label htmlFor="">comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        {/* Similarly for select fields  */}
        <div>
          <label htmlFor="">Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        {/* in summary there are three steps to get the controlled component of the form */}
        {/* (1): writing the HTML (2): Assign it the value (3): onChange event handler to get the change in the input */}
        {/* How can we submit this form data */}
        <button type="submit">submit</button>
        {/* if there is no form tag then we can use onSubmit method on button */}
      </form>
    );
  }
}

export default Form;
