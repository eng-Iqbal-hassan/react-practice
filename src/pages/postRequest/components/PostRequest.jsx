import React, { Component } from "react";
import axios from "axios";
export class PostRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        {/* how can we post our data to an API.
        The requirement is that we fill three input data  and onclick of submit button we store this three input data  to the API  */}
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">submit</button>
          {/* till here we create the state for each three inputs and assign its values back to the input. there is destructuring of these three also after the render line and assign it to the inputs by value attribute */}
          {/* further we have catch its change by changeHandler  */}
          {/* submitHandler is defined in the last  to catch the change in the input button type submit is given and onsubmit of the form tag is assigned that handler that handler have preventDefault to avoid the lose of data when page is  loaded and simply the clg of the state object when we fill the data and click on the button we get the filled data in the console */}
          {/* Basically, now we have the object which we want to post, lets do it using axios */}
          {/* posts request is pretty much same as that of get request with little change, we make the post request in submit handler. It is like axios.post which takes two argument, first is the url of API in which we want to post data, second is the object containing data, in our case it is this.state  */}
        </form>
      </div>
    );
  }
}

export default PostRequest;
