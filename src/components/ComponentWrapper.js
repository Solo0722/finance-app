import { StyleSheet } from "react-native";
import React from "react";
import { Button, Heading, Text, VStack, View } from "native-base";

const ComponentWrapper = ({ title, secondaryBtn, children }) => {
  return (
    <View w="full">
      <VStack space={"4"}>
        <View
          display="flex"
          flexDirection="row"
          aligItems="center"
          justifyContent={"space-between"}
        >
          <Heading fontSize="xs" fontWeight={"bold"}>
            {title}
          </Heading>
          {secondaryBtn && (
            <Text fontSize="xs" color="darkBlue.500" opacity="0.5">
              {secondaryBtn.text}
            </Text>
          )}
        </View>
        <View>{children}</View>
      </VStack>
    </View>
  );
};

export default ComponentWrapper;

const styles = StyleSheet.create({});
