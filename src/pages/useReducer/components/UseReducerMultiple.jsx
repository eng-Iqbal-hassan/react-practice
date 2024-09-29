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

export function UseReducerMultiple() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>
        <div>count one - {count}</div>
        <button onClick={() => dispatch("increment")}>increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
      <div>
        <div>count two - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>increment</button>
        <button onClick={() => dispatchTwo("decrement")}>decrement</button>
        <button onClick={() => dispatchTwo("reset")}>reset</button>
      </div>
      {/* if we need to maintain the two counter with exact same state transition. The more simpler way is the use of multiple reducer  */}
      {/* here as both counter has same state transition so both has same arguments. It prevents state management, duplicating the code and state merging as compared to using state and action objects  */}
    </div>
  );
}
