import React from "react";

function Title() {
  console.log("rendering title");
  return <div>use call back hook</div>;
}

export default React.memo(Title);
