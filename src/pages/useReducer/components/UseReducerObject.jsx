import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

// in this example instead of simple state and action, we are going to use state object and action object
// first thing we are going to do is the change of simple numeric value to the state object in which property firstCounter set to zero -> initial Value is mapped to the count do this firstCounter property needs to be rendered in jsx so count is changed by count.firstCount
// count is representing the complete state object and we need just firstCounter
// second step is that our actions of simle string are changed to the object with property name type
// now the action is changed to the action.type action refers to the complete object as mention in the dispatch and we need type property only
// Finally for the increment and decrement state we need to return the object
// Till this steps we have get the similar implementation of the counter as that case of string but this time with object

// What are the advantages to use it

// (1): Concerning the value by which we need to increment or decrement the counter
// consider the scenario in which we want to increment or decrement by five
// in this case we get one more property in the dispatch object which in turn specify the action in the reducer function and this property is value . So instead of hard quoted data in the action object we use action.value
// by the use of action object, we can use additional data in the reducer function

// (2): the second thing is that we want to talk state as object. Suppose if you want to maintain one more counter it will be very easy in case of state as object
// the secondCounter property is added in the state object abd two more switch case
// now we have two properties but changing only one at a time. To get the correct output, we need to modify the return statement and merge the state property. For it, the spread operator is used
// the jsx is added for second counter and rendered correctly
// by using state as an object we can keep the track of multiple states

// this thing of keeping multiple state in single variable is suitable for global scope. Here, in this local scope there is another way to perform it.

export function UseReducerObject() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>first count - {count.firstCounter}</div>
      <div>second count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          increment counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
