import { useCounter } from "../hooks/useCounter";

export function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 5);
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      {/* // in our other example we need to put the functionality in custom hook to  avoid repetition of the code  */}
    </div>
  );
}
