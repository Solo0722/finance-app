import uniqueId from "lodash/uniqueId";
import { client } from "./sanityClient";
import { clearFromAsyncStorage, saveToAsyncStorage } from "./dataServices";
import { storageKeys } from "../constants/routeNames";

export const registerUser = async (signupData) => {
  const response = { data: null, error: null };
  const doc = {
    _id: uniqueId(),
    _type: "user",
    fullName: signupData.fullName,
    email: signupData.email,
    password: signupData.password,
    userImg: null,
  };

  await client
    .createIfNotExists(doc)
    .then((result) => {
      response.data = result;
      return response;
    })
    .catch((err) => {
      console.error(err);
      response.error = err;
      return response;
    });
};

export const loginUser = async (loginData) => {
  const response = { data: null, error: null };
  const query = `*[_type == 'user' && email == '${loginData.email.trim()}' && password == '${loginData.password.trim()}']`;
  await client
    .fetch(query)
    .then((result) => {
      response.data = result[0];
      return response;
    })
    .catch((err) => {
      console.log(err);
      response.error = err;
      return response;
    });
};

export const logoutUser = async () => {
  const res = await clearFromAsyncStorage(storageKeys.USER);
  return res;
};
