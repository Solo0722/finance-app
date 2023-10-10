import { StyleSheet } from "react-native";
import React from "react";
import { darkTheme } from "../../theme/colors";
import { View } from "native-base";

const BankCard = () => {
  return (
    <View
      w="full"
      h={200}
      bgColor={darkTheme.accentColor3}
      rounded={"lg"}
    ></View>
  );
};

export default BankCard;

const styles = StyleSheet.create({});
