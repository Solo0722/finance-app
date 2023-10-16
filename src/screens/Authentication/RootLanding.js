import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { readFromAsyncStorage } from "../../services/dataServices";
import { routeNames, storageKeys } from "../../constants/routeNames";
import isEmpty from "lodash/isEmpty";

const RootLanding = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      redirectUser();
    }, [])
  );

  const redirectUser = async () => {
    const user = await readFromAsyncStorage(storageKeys.USER);

    if (!user.data || isEmpty(user.data)) {
      navigation.navigate(routeNames.ONBOARD);
    } else {
      navigation.navigate(routeNames.TAB);
    }
  };
};

export default RootLanding;

const styles = StyleSheet.create({});
