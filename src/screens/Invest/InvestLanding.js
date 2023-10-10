import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import VirtualizedList from "../../components/VirtualisedList";
import Searchbar from "../../components/Searchbar";
import { VStack } from "native-base";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";

const InvestLanding = () => {
  return (
    <ScreenWrapper>
      <VirtualizedList>
        <VStack space="4"></VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default InvestLanding;

const styles = StyleSheet.create({});
