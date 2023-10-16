import { Animated, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { darkTheme } from "../../theme/colors";
import {
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

const BankCard = (props) => {
  const { style, item, index, pretty, testID, ...animatedViewProps } = props;

  return (
    <Animated.View
      testID={testID}
      // style={{ flex: 1, width: "100%", height: 200, backgroundColor: "red" }}
      {...animatedViewProps}
    >
      <View w="full" h={200} bgColor={darkTheme.accentColor3} rounded={"lg"}>
        <LinearGradient
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          colors={
            props.index % 2 === 0
              ? [
                  darkTheme.primaryColor,
                  darkTheme.primaryColor,
                  darkTheme.lightPrimaryColor,
                ]
              : [
                  darkTheme.primaryColor,
                  darkTheme.success,
                  darkTheme.secondaryColor,
                ]
          }
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
              <View flex="1" p="4" justifyContent={"space-between"}>
                <Image
                  source={require("../../assets/images/chip.png")}
                  alt="chip"
                  width={"16"}
                  height={"10"}
                  rounded="lg"
                />
                <VStack space="6" w="full">
                  <View>
                    <Text fontSize={"sm"} color={darkTheme.lightGrayColor}>
                      456{"\t"} 7356{"\t"} 7402 {"\t"}2305
                    </Text>
                  </View>
                  <View
                    w="full"
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Heading
                      fontSize={30}
                      fontWeight={"bold"}
                      color={darkTheme.lightGrayColor}
                    >
                      $ 566.50
                    </Heading>
                    <IconButton
                      variant={"unstyled"}
                      rounded="full"
                      bgColor={darkTheme.grayColor}
                      icon={
                        <Iconify
                          icon="solar:alt-arrow-right-outline"
                          size={20}
                          color={darkTheme.bodyBackgroundColor}
                          strokeWidth={20}
                        />
                      }
                    />
                  </View>
                </VStack>
              </View>
            </ImageBackground>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Animated.View>
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
