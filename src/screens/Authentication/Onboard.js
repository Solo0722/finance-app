import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Box, Button, Center } from "native-base";
import { routeNames } from "../../constants/routeNames";

const Onboard = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Center w="100%" height="100%" flex="1">
        <Center
          safeArea
          p="2"
          py="8"
          w="100%"
          height={"100%"}
          flex="1"
          position="relative"
        >
          <Button
            colorScheme="indigo"
            rounded="lg"
            onPress={() => navigation.navigate(routeNames.SIGNUP)}
          >
            Get Started
          </Button>
        </Center>
      </Center>
    </ScreenWrapper>
  );
};

export default Onboard;

const styles = StyleSheet.create({});
