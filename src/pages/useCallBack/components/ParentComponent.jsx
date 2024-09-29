import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
    // i have logged in title, count and  button component i have cleared the logs and click on one of the button  and see all the 5 logs  are again shown on the screen. It means one component is changed and all the components are re-rendered. Might happens the case in which on change of one component even 20 or 30  components are re-rendered. This cause the performance issue.
    // To improve the performance, we have to restrict the re-renders to only the component that need to re-render
    // in simple way that  we need if we click  increment age button, only age and increment age button  should re-render
    // similarly, if we click on increment salary button, then component related to salary and increment salary should re-render
    // this thing is achieved using React.memo in the child component
    // React.memo is the higher order component which prevent the component to be re-rendered if the props or state of the component is  not changing so  wrap  the export of the child component in its  function with React.memo
    // we have seen some of our logs are improved , it means using useMemo our logs are less as compare to before
    // but we have both buttons to be re-rendered, we need one button component  which is clicked should be re-rendered
    // Both button function which are different function but are the same prop name so React.memo does not prevent to  re-render both components when one of the component is changed
    // how this thing will be fixed, this thing is fixed by  useCallback hook
    // useCallback is a hook that   will return a memoized version of the callback function that only changes if one of the dependencies has changed.
    // What? if we relate it to our example, it means that useCallback hook will cash the increment salary function and return that if the salary is not incremented, and if the salary is incremented that is the dependency has changed, then only it returns the new function
    // Why? it is useful when passing callbacks to optimized child component that rely on reference equality to PREVENT UNNECESSARY RENDERS.
    // lets breakdown this why, passing callbacks means this function in the parent component which is passing down to the child component in form of props, optimized child components, that our components which are optimized using React.memo and reference equality is the checking if the functions are equal which is required for our example
    // how to use the useCallback hook-> import it in react and use it whose first parameter is the callback function and the second parameter is the dependency array  of the function
    // after the callback we have passed the cashed function to the component
    // and the result is that if we click on the age button only age related two buttons are re-rendered and same goes for the salary example.
  );
}
