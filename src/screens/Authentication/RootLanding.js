import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  clearFromAsyncStorage,
  readFromAsyncStorage,
} from "../../services/dataServices";
import { routeNames, storageKeys } from "../../constants/routeNames";
import isEmpty from "lodash/isEmpty";
import { useContext } from "react";
import { GlobalContext } from "../../context/ContextProvider";

const RootLanding = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      redirectUser();
    }, [])
  );

  const { setLoggedInUser } = useContext(GlobalContext);

  const redirectUser = async () => {
    await clearFromAsyncStorage(storageKeys.USER);
    const user = await readFromAsyncStorage(storageKeys.USER);

    if (!user.data || isEmpty(user.data)) {
      // navigation.navigate(routeNames.ONBOARD);
      navigation.navigate(routeNames.TAB);
    } else {
      console.log("User", user.data);
      setLoggedInUser(user.data);
      navigation.navigate(routeNames.TAB);
    }
  };
};

export default RootLanding;

const styles = StyleSheet.create({});
