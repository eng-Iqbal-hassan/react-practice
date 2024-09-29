import React, { useState } from "react";
import useDocTitle from "../hooks/useDocTitle";

export function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
    // over here we can see that we need the same functionality in two component we have duplicate the code
    // instead of this  thing we can create the custom hook in which common functionality is placed and reused both times
    // This is actually the working of custom hooks
  );
}
