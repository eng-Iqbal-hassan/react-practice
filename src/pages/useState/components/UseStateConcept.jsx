import React, { useState } from "react";
import { PrevStateHooks } from "..";

export function UseStateConcept() {
  const [count, setCount] = useState(0);
  // here inside useState 0 is the initial value
  // this value is destructured to value count and method setCount which can alter the count value  as mentioned in example given below
  // we have all three things to apply states Function component, state value and method the method to change that value.
  // when the component is rendered for the first time, the initial value of the count is zero. When someone clicked on the button, setCount method increment the value of count.  The component is re-rendered in the ui and updated count value is shown in the UI

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <PrevStateHooks />
    </div>
  );
}
