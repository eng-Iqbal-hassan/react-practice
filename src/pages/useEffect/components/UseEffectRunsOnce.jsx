import React, { useState, useEffect } from "react";

export function UseEffectRunsOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mousePosition = (e) => {
    console.log("Mouse Position");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect calls");
    window.addEventListener("mousemove", mousePosition);
    // when we need clean up the code we return the clean up function inside the implemented function and this implemented function is inside useState.
    // clean up codes might cancelling the subscription, removing timers or even the eventListener
    return () => {
      console.log("component unmount code");
      window.removeEventListener("mousemove", mousePosition);
    };
  }, []);
  return (
    <div>
      hooks x - {x} y - {y}
    </div>
    // in this example we wanted to run useEffect only once , so we pass the second parameter the empty array we observe that useEffect runs only once . so this is the mimic of componentDidMount (useEffect with empty array as second param) in react function component
  );
}
