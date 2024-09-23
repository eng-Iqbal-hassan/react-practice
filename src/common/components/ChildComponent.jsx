function ChildComponent(props) {
  return (
    // <button onClick={props.greetHandler}>greet Parent</button>
    //   till this we have done an onClick in the child component by which the parent component is triggered so the way to influence on the parent component by child component is again props but this time is method as props method is passed from parent down the child and this methods in the child component do things to impact on the parent component. In simple words the data in the parent component is controlled by the child component

    <button onClick={() => props.greetHandler("child")}>greet Parent</button>
    // in  the last example i want to pass parameters from parent to child. For it i use simply arrow function in the method which is received as  props and in the parenthesis param string is added which is passed to the greetParent function in the parentComponent
  );
}

export default ChildComponent;
