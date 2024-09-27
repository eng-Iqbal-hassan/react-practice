import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export function DataFetching() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      {console.log("post", post)}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
