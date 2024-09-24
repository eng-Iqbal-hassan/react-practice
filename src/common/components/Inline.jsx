import React from "react";
// style object is created in which all the styles are mentioned and this object is given to the style attribute.

function Inline() {
  const heading = {
    fontSize: "72px",
    color: "blue",
  };

  return (
    <div>
      <h2 style={heading}>heading</h2>
    </div>
  );
}

export default Inline;
