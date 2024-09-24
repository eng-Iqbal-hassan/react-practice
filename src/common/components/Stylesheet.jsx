import React from "react";
import "./MyStyles.css";

function Stylesheet({ primary }) {
  let className = primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
