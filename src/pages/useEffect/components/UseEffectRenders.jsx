import React, { useState, useEffect } from "react";

export function UseEffectRenders() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  //   useEffect()
  // like useState useEffect is also a function, you just need to call it
  // we have to pass a parameter, this parameter is a function which gets executed after every render of the component
  useEffect(() => {
    console.log("updating document title");
    document.title = `clicked ${counter} times`;
  }, [counter]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCounter((prevStat) => prevStat + 1)}>
        click {counter} times
      </button>
    </div>
    // conditionally runs the useEffect:
    // it is observed that when we write the input text the useEffect continue to be executed,
    // we need to avoid it. For it, we pass the second parameter which will tells that when this thing is changed then execute the useEffect.
    // in our case the parameter is counter so when it is passed, then useEffect is run conditionally
    // second parameter is the array of values which tells that if these values do not change then useEffect does not run. these value can be one or more
  );
}
