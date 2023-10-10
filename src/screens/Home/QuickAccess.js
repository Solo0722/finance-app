import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import { FlatList, View } from "native-base";
import { getTopTracks } from "../../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import QuickAccessCard from "../../components/QuickAccessCard";

const QuickAccess = () => {
  return (
    <ComponentWrapper
      title={"Quick Access"}
      // secondaryBtn={{ text: "View all", onPress: () => null }}
    >
      <FlatList
        w="full"
        horizontal
        data={[...new Array(8)]}
        //   keyExtractor={(item) => item.id}
        renderItem={({ item }) => <QuickAccessCard />}
        ItemSeparatorComponent={<View mx={"2"} />}
        showsHorizontalScrollIndicator={false}
      />
    </ComponentWrapper>
  );
};

export default QuickAccess;

const styles = StyleSheet.create({});