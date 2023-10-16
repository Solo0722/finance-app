import * as Type from "../types/Type";

export const setLoggedInUser = (value) => ({
  type: Type.SET_LOGGED_IN_USER,
  payload: value,
});
