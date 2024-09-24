import { useState } from "react";

export default function UserGreet() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if else approach
  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         <p>hello Iqbal</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>hello Guest</p>
  //       </div>
  //     );
  //   }
  // can if else statement be  used inside the jsx the answer is no jsx is simply syntactic sugars for function calls and object constructions

  // element variable approach

  //   let message;
  //   if (isLoggedIn) {
  //     message = <div>Hello Iqbal</div>;
  //   } else {
  //     message = <div>Hello Guest</div>;
  //   }
  //   return <>{message}</>;

  //   ternary conditional operator
  //   return isLoggedIn ? <div>Hello Iqbal</div> : <div>Hello Guest</div>;

  // there is the other way to write conditional operator which is
  return <div>{isLoggedIn ? "hello Iqbal" : "hello guest"}</div>;

  // the last method is the short circuit method in which there is a use case if  the user wants to  render something or nothing
  //   return isLoggedIn && <div>Hello Iqbal</div>;
  // the right side will be  the output if the left side is true in case of short circuit  operator
  // in our present case the value of isLoggedIn is false  so there will be  nothing returned in this case
}
