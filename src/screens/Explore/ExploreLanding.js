import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import VirtualizedList from "../../components/VirtualisedList";
import Searchbar from "../../components/Searchbar";
import { VStack } from "native-base";

const ExploreLanding = () => {
  return (
    <ScreenWrapper>
      <VirtualizedList>
        <VStack space={"6"}>
          <Searchbar />
        </VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default ExploreLanding;

const styles = StyleSheet.create({});
