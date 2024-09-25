import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>portal demo</h1>,
    document.getElementById("react-portal")
  );
  //   despite this component is passed to the place where other components of root dom are placed but it is outside of that dom due to ReactDom.createPortal
  // first element of the portal can be anything which react can render, it could be number, string, element or even a component
}

export default PortalDemo;
