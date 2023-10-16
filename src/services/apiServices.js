import uniqueId from "lodash/uniqueId";
import { client } from "./sanityClient";
import { saveToAsyncStorage } from "./dataServices";
import { storageKeys } from "../constants/routeNames";

export const registerUser = (signupData) => {
  const response = { data: null, error: null };
  const doc = {
    _id: uniqueId(),
    _type: "user",
    fullName: signupData.fullName,
    email: signupData.email,
    password: signupData.password,
    userImg: null,
  };

  client
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

export const loginUser = (loginData) => {
  const response = { data: null, error: null };
  const query = `*[_type == 'user' && username == '${loginData.username.trim()}' && password == '${loginData.password.trim()}']`;
  client
    .fetch(query)
    .then((result) => {
      response.data = result;
      return response;
    })
    .catch((err) => {
      console.log(err);
      response.error = err;
      return response;
    });
};
