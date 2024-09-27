import React from "react";
import { UseEffectCleanups, UseEffectRenders, UseEffectRunsOnce } from "..";

export function UseEffectConcept() {
  return (
    <div>
      <UseEffectRenders />
      <UseEffectRunsOnce />
      {/* run this clean up function with other components commented out  */}
      <UseEffectCleanups />
    </div>
  );
}
