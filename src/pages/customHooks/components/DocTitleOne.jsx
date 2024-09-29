import React, { useState } from "react";
import useDocTitle from "../hooks/useDocTitle";

export function DocTitleOne() {
  const [count, setCount] = useState(0);
  useDocTitle(count); // here this thing is giving us the document title which is written once in hooks and used multiple times
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  );
}
