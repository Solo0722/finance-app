import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToAsyncStorage = async (key, value) => {
  const valueToString = JSON.stringify(value);

  try {
    await AsyncStorage.setItem(key, valueToString);
    return true;
  } catch (e) {
    return false;
  }
};

export const readFromAsyncStorage = async (key) => {
  const response = { data: null, error: null };
  try {
    const data = await AsyncStorage.getItem(key);
    response.data = JSON.parse(data);
    return response;
  } catch (error) {
    response.error = error;
    console.log("error with readFromAsyncStorage", error);
    return response;
  }
};

export const clearFromAsyncStorage = async (key) => {
  const response = { data: null, error: null };
  try {
    await AsyncStorage.removeItem(key);
    response.data = "Success";
    return response;
  } catch (error) {
    response.error = error;
    console.log("error with readFromAsyncStorage", error);
    return response;
  }
};
