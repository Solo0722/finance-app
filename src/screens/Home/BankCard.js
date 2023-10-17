import { Animated, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { darkTheme } from "../../theme/colors";
import {
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  View,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Iconify } from "react-native-iconify";

const BankCard = () => {
  return (
    <View w="full" h={200} bgColor={darkTheme.accentColor3} rounded={"lg"}>
      <LinearGradient
        start={{ x: 1.0, y: 1.0 }}
        end={{ x: 0.0, y: 0.0 }}
        colors={[
          darkTheme.primaryColor,
          darkTheme.success,
          darkTheme.secondaryColor,
        ]}
        style={styles.gradient}
      >
        <LinearGradient
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
          style={styles.gradient}
        >
          <ImageBackground
            style={styles.imageBg}
            source={require("../../assets/images/cardlines.png")}
          >
            <View flex="1" p="4">
              <VStack space="6" justifyContent={"space-between"}>
                <Image
                  source={require("../../assets/images/chip.png")}
                  alt="chip"
                  width={"16"}
                  height={"10"}
                  rounded="lg"
                />
                <Heading
                  fontSize={30}
                  fontWeight={"bold"}
                  color={darkTheme.lightGrayColor}
                >
                  $ 566.50
                </Heading>
                <HStack
                  space="8"
                  w="full"
                  flexDir={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <VStack space="2">
                    <Text
                      fontSize={"xs"}
                      fontWeight={"bold"}
                      color={darkTheme.grayColor}
                    >
                      Total income
                    </Text>
                    <Text
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      color={darkTheme.grayColor}
                    >
                      $ 200
                    </Text>
                  </VStack>
                  {/* <Divider
                    orientation="vertical"
                    bgColor="coolGray.700"
                    thickness={"0.5"}
                  /> */}
                  <VStack space="2">
                    <Text
                      fontSize={"xs"}
                      fontWeight={"bold"}
                      color={darkTheme.grayColor}
                    >
                      Total expenses
                    </Text>
                    <Text
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      color={darkTheme.grayColor}
                    >
                      $ 200
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </View>
          </ImageBackground>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderRadius: 10,
  },
  imageBg: {
    flex: 1,
    borderRadius: 10,
  },
});
export default BankCard;
