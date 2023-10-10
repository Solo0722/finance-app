import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Skeleton, VStack, View } from "native-base";

const SkeletonArray = ({ width, height, isCircle, horizontal = true }) => {
  return (
    <FlatList
      w="full"
      horizontal={horizontal}
      data={[...new Array(10).keys()]}
      renderItem={({ item }) => (
        <VStack space={"2"} overflow="hidden" rounded={"md"}>
          {isCircle ? (
            <Skeleton rounded={"full"} h={height} w={width} />
          ) : (
            <Skeleton h={height} />
          )}
          {isCircle ? (
            <Skeleton.Text w={width} lines={2} />
          ) : (
            <Skeleton.Text w={width} />
          )}
        </VStack>
      )}
      ItemSeparatorComponent={
        <View mx={horizontal ? "2" : "0"} my={horizontal ? "0" : "2"} />
      }
    />
  );
};

export default SkeletonArray;

const styles = StyleSheet.create({});
