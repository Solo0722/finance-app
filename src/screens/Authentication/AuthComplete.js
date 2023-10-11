import { StyleSheet } from "react-native";
import React from "react";
import { Center, Text } from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import { routeNames } from "../../constants/routeNames";
import LottiePlayer from "../../components/LottiePlayer";

const AuthComplete = ({ navigation }) => {
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
          <LottiePlayer
            animation={require("../../assets/lotties/verificationComplete.json")}
            onAnimationFinish={() => navigation.navigate(routeNames.HOME)}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </Center>
      </Center>
    </ScreenWrapper>
  );
};

export default AuthComplete;
