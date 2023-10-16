import React, { createContext, useContext, useReducer } from "react";

const Store = createContext();

export const StoreProvider = ({ children, initialState, reducer }) => {
  const value = useReducer(reducer, initialState);
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

// `useStore` A Custom Hook implementation to get context Store data's
export function useStore() {
  return useContext(Store);
}
