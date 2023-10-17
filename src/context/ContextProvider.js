import React from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext({});

const ContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
