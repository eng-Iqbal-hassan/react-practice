import React, { useState, useEffect, useRef } from "react";

export function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  // we have performed componentDidMount  by passing the empty array as second param to the useEffect and componentWillUnmount by returning the cleanup function inside the useEffect. so this is the replica of class base component in function base component about timer

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        reset timer
      </button>
    </div>
    // after the timer being placed we want to reset it on the click of the button
    // when we have given onClick={() => clearInterval(Interval)} we get the error which is Interval is undefined. As the Interval is scoped inside the useEffect so it is not accessible outside the hook. So this problem is solved using useRef hook. Apart from accessing the DOM node, the useRef can also access the value which are not mutableRe
    // useRef -> value persist -> it does not cause any additional re-render when its value does change
    // do using useRef the const is created and this constant is  used inside useEffect and also in the onClick of button and our problem is solved so this is the 2nd use case where useRef hooks come for the help
  );
}
