import { StyleSheet } from "react-native";
import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import TransactionHistoryCard from "../../components/TransactionHistoryCard";
import { FlatList, View } from "native-base";

const TransactionHistory = () => {
  return (
    <ComponentWrapper title={"History"}>
      <FlatList
        w="full"
        data={[...new Array(10)]}
        //   keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionHistoryCard />}
        ItemSeparatorComponent={<View my={"2"} />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </ComponentWrapper>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
