import React from "react";

function Memo({ name }) {
  console.log("rendering memo component");
  return <div>memo component {name}</div>;
}

export default React.memo(Memo);
// Memo plays the same role in function base component as pure components play in class component
