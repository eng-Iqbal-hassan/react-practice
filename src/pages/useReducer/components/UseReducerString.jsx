import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

export function UseReducerString() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
    // useReducer is imported from react
    // useReducer takes two things as argument (a): reducer function and (b): initial value and return two things (a): newState and dispatch method which specify the action
    // we need to define initial value and reducer function, reducer function takes two things as argument current state and action and return one thing which is newState;
    // code snippet is practiced as above
  );
}
