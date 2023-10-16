import * as Type from "../types/Type";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case Type.SET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };

    default:
      return state;
  }
};
