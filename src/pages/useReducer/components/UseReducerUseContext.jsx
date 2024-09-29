import React, { useReducer } from "react";
import { ComponentA, ComponentB, ComponentC } from "..";

export const CountContext = React.createContext();

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

export function UseReducerUseContext() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <div>count - {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}
