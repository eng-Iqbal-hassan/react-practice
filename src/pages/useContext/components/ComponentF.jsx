// import React from "react";
// import { UserContext, CompanyContext } from "./UseContext";

// export function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <CompanyContext.Consumer>
//               {(company) => {
//                 return (
//                   <div>
//                     user context value is {user} and company name is {company}
//                   </div>
//                 );
//               }}
//             </CompanyContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//       {/* here the use context is applied but the way that is used is bit odd, also
//       if there are multiple value then what to do this is the scenario. Consider the way which is mentioned above */}
//       {/* let us take another level of the context  */}
//       {/* one more level of the context is inside for the first context and the code becomes ugly this way */}
//       {/* here to consume just two values too much level of nesting is done. There should be the better way to consume the values. This is the place where useContext hooks comes into picture which is more simpler and readable approach to consume the values  */}

//       {/* let us explain the same example with useContext hook  */}
//     </div>
//   );
// }

// the above example is without using useContext hook
// now let us achieve the same thing with useContext hook

import React, { useContext } from "react";
import { UserContext, CompanyContext } from "./UseContext";

export function ComponentF() {
  const user = useContext(UserContext);
  const company = useContext(CompanyContext);
  return (
    <div>
      user context value is {user} and company name is {company}
    </div>
  );
}

// the useContext does not need any change in the provider level and all the changes does happen in the consumer level
// useContext happens in three steps
// (1): import useContext
// (2): import necessary context, in our case userContext and the companyContext
// (3): provide these context as argument to the useContext function-> useContext function will return the value so this function call is given to the constant and when these constants are used in return then the value is retrieved. It is observed that it is the simplest hook to use. Feel free to use it if required
