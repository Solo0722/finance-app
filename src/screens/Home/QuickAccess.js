import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import { FlatList, View } from "native-base";
import { getTopTracks } from "../../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import QuickAccessCard from "../../components/QuickAccessCard";
import { quickAccessList } from "./helpers/quickAccessList";

const QuickAccess = () => {
  return (
    <ComponentWrapper
      title={"Quick Access"}
      secondaryBtn={{ text: "View all" }}
    >
      <FlatList
        w="full"
        horizontal
        data={quickAccessList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <QuickAccessCard item={item} />}
        ItemSeparatorComponent={<View mx={"2"} />}
        showsHorizontalScrollIndicator={false}
      />
    </ComponentWrapper>
  );
};

export default QuickAccess;

const styles = StyleSheet.create({});
