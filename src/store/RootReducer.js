import { AuthReducer } from "./modules/auth/reducers/AuthReducer";
import { TodoReducer } from "./modules/todo/reducers/TodoReducer";

export const initialState = {
  todo: {
    todos: [],
  },
  auth: {
    isLoggedIn: false,
  },
};

const RootReducer = ({ todo, auth }, action) => {
  return {
    todo: TodoReducer(todo, action),
    auth: AuthReducer(auth, action),
  };
};

export default RootReducer;
