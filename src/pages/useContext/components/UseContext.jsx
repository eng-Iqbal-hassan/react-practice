import React from "react";
import { ComponentC } from "..";

export const UserContext = React.createContext();
export const CompanyContext = React.createContext();

export function UseContext() {
  return (
    <div>
      <UserContext.Provider value="iqbal">
        <CompanyContext.Provider value="cogent labs">
          <ComponentC />
        </CompanyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
