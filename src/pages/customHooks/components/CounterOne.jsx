import { useCounter } from "../hooks/useCounter";

export function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
