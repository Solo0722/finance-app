import { NativeModules, Platform } from "react-native";
import React from "react";
import { Avatar, Box, HStack, Heading } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "./BackButton";

const TabHeader = ({
  title,
  leftComponents = [],
  rightComponents = [],
  showBackBtn = false,
}) => {
  const { StatusBarManager } = NativeModules;

  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      zIndex={"10"}
      marginTop={Platform.OS === "android" ? StatusBarManager.HEIGHT : 0}
      pt="2"
      pb="1"
      px={"4"}
    >
      <HStack
        space="1"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {showBackBtn && <BackButton />}
        {title ? (
          <Heading
            style={{ fontFamily: "PlusJakartaSans-regular", fontSize: 20 }}
          >
            {title}
          </Heading>
        ) : (
          <HStack space="2">
            {leftComponents.map((component) => component.component)}
          </HStack>
        )}
      </HStack>
      <HStack space="2">
        {rightComponents.map((component) => component.component)}
      </HStack>
    </Box>
  );
};

export default TabHeader;
