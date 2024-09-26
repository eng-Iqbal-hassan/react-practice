import React, { Component } from "react";
import axios from "axios";

export class GetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  };

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <>
        <div>
          list of posts
          {posts.length > 0
            ? posts.map((post) => <div key={post.id}>{post.title}</div>)
            : "abc"}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
      </>
    );
  }
}

export default GetRequest;
