import React, { useState } from "react";
import { UseEffectRunsOnce } from "..";

export function UseEffectCleanups() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle display</button>
      {display && <UseEffectRunsOnce />}
      {/* The issue at this place is that when the component useEffectRunsOnce is not displayed then also the logs of this components are shown in the console
      like componentWillUnmount -> where removeEventListener is applied, this kind of thing is required  over there . In other words useEffect cleanUps are required */}
    </div>
  );
}
