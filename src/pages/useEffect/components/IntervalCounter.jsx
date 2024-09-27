import React, { useState, useEffect } from "react";

export function IntervalCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const tick = () => {
      setCount((prevCount) => prevCount + 1);
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>{count}</div>;
  // the function needs to call in the useEffect should be performed inside the useEffect
  // if you want to run the multiple useEffect you can go with that
  // One of the common mistake is seen is about the defining the dependent params of the useEffect. If we are leaving it empty we should be sure why it is not depending on any variables
}
