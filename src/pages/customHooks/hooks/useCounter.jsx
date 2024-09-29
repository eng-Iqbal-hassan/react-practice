import { useState } from "react";

export function useCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialValue);
  };

  //   in this scenario we need to access these methods and value so instead of returning jsx we have returned the array which contain  these methods and the use in different functions to avoid repitition of code and use effectively

  return [count, increment, decrement, reset];
}
