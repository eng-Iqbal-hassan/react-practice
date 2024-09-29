import React, { useState, useMemo } from "react";

export function UseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div onClick={incrementOne}>
        <button>increment one - {countOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div onClick={incrementTwo}>
        <button>increment two - {countTwo}</button>
      </div>
    </div>
    // lets have one more scenario in which we need to define whether the increment value  is even or odd
    // is Even function is performed and we have slowed down the function by adding the while loop the thing is observed that  ui change is slow now
    // Further if we click on the counter two the ui is still slow, rather there is no link of counterTwo with isEven function
    // Actually when the state is updated, the component is re-rendered and when the component is re-rendered then isEven function is performed again.
    // So we need to tell react that when the counterTwo is updated do not update other calculation like performing isEven function and incrementOne function
    // this is the place where useMemo hook comes into picture
    // useMemo works in the similar way as that of useCallback hook
    // first import it with react, the use it. Its first param is the the function whose value is needed to cash and its  second param is  the array of dependent value
    // with the use of useMemo, when we click on the second counter, the result is faster because re-render cash the value of isEven function from the previous render and hence the performance has improved
    // useCallBack and useMemo hook is appearing. So what is the difference between these two,
    // if you need to cash a function use useCallback hooks and if you want to cash the result of already invoked function (in our case counterOne is already invoked and we use it in another function to get some other result) then use useMemo hook
  );
}
