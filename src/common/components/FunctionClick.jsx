import React from "react";

export default function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return <button onClick={clickHandler}>click me</button>;
}
