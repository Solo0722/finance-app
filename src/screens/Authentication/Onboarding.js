import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { darkTheme } from "../../theme/colors";
import { useStatusBar } from "../../hooks/useStatusBar";
import { Button, HStack, Heading, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../../constants/routeNames";

const Onboarding = () => {
  useStatusBar(true);
  const navigate = useNavigation();
  return (
    <ScreenWrapper
      containerStyles={{
        backgroundColor: `${darkTheme.primaryColor}`,
        justifyContent: "flex-end",
      }}
    >
      <View
        h="80"
        bgColor={"#ffff"}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        p={10}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack space="6">
          <Heading fontSize={"18"} textAlign="center">
            Save, Invest and Earn
          </Heading>
          <Text textAlign="center" color={darkTheme.grayColor} px={"10"}>
            Secure your after school goals,save and invest with pennywise
          </Text>
          <HStack space="4" flexDir="row" justifyContent="center">
            <Button w="1/2" py="3" onPress={() => navigate(routeNames.SIGNUP)}>
              Sign up
            </Button>
            <Button
              w="1/2"
              py="3"
              variant={"outline"}
              onPress={() => navigate(routeNames.SIGNIN)}
            >
              Login
            </Button>
          </HStack>
        </VStack>
      </View>
    </ScreenWrapper>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
