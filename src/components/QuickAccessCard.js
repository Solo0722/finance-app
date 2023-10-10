import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { darkTheme } from "../theme/colors";

const QuickAccessCard = () => {
  return (
    <View
      rounded={"lg"}
      w="24"
      h={"24"}
      bgColor={darkTheme.accentColor3}
    ></View>
  );
};

export default QuickAccessCard;

const styles = StyleSheet.create({});
