import React, { useEffect, useRef } from "react";

export function FocusInput() {
  const inputRef = useRef();
  useEffect(() => {
    // focus the  input in it and as we have created componentDidMount this time
    inputRef.current.focus();
    // inputRef.current is something which access the dom node and we have applied  focus method on to it to get the required result
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
