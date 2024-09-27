import axios from "axios";
import React, { useState, useEffect } from "react";

export function DataFetchingSinglePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const btnClick = () => {
    setIdFromBtnClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [idFromBtnClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={btnClick}>
        fetch post
      </button>
      <h1>{post.title}</h1>
    </div>
  );
}
