import axios from "axios";
import React, { useState, useEffect } from "react";

export function DataFetchingSinglePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  );
}
