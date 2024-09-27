import React from "react";
import {
  IntervalCounter,
  UseEffectCleanups,
  UseEffectRenders,
  UseEffectRunsOnce,
} from "..";

export function UseEffectConcept() {
  return (
    <div>
      {/* <UseEffectRenders />
      <UseEffectRunsOnce /> */}
      {/* run this clean up function with other components commented out  */}
      {/* <UseEffectCleanups /> */}
      <IntervalCounter />
    </div>
  );
}
