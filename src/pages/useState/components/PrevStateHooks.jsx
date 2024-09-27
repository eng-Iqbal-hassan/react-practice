import React, { useState } from "react";

export function PrevStateHooks() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount((count + 1);
      // the result shown in the ui, click on the incrementFive button it still increase by 1
      // to overcome this we use the second form in which instead of passing the updated value  we pass the function which take a look in the previous value and updated the new value as mention below
      setCount((prevCount) => prevCount + 1);
      // now on click, the count is incremented by 5 this time
      //   so whenever you need to deal the update the state value by the previous state value always go with the safer option which is the use of function
    }
  };

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={incrementFive}>increment 5</button>
    </div>
  );
}
