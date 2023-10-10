import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import { darkTheme } from "../theme/colors";

const TransactionHistoryCard = () => {
  return (
    <View w="full" h={70} bgColor={darkTheme.accentColor3} rounded="lg"></View>
  );
};

export default TransactionHistoryCard;

const styles = StyleSheet.create({});
