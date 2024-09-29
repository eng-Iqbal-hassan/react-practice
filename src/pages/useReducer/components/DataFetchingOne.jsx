import axios from "axios";
import React, { useState, useEffect } from "react";

export function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      }, []);
  });
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}
