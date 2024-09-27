import React, { useState } from "react";

export function UseStateObject() {
  const [name, setName] = useState({ fistName: "", lastName: "" });
  //   the useState value can be number, string, bolean, arrays or object
  // let's explore with objects
  // Here name variable is the object and setter function  is the method to update the variable
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.fistName}
          onChange={(e) => setName({ ...name, fistName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        {/* setter function provided by the useState hooks does not automatically merge and update objects, you manually merge them like the spread operator on name and then pass the value as the value updated for firstName and lastName */}
        {/* without spread operator we  have seen that first name value is written when start  writing  the second value, the first value is removed and vice versa  */}
        <h2>first name is {name.fistName}</h2>
        <h1>last name is {name.lastName}</h1>
      </form>
    </div>
  );
}
