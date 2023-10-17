import { StyleSheet } from "react-native";
import React from "react";
import {
  HStack,
  Heading,
  Image,
  Progress,
  Text,
  VStack,
  View,
} from "native-base";
import { darkTheme } from "../../theme/colors";
import random from "lodash/random";

const SavingPlanCard = () => {
  return (
    <View
      flexGrow={1}
      w="full"
      //   minH="160"
      rounded="lg"
      p="4"
      bgColor={darkTheme.accentColor3}
    >
      <VStack space="4">
        <HStack space={"2"} alignItems={"center"}>
          <Image
            rounded={"lg"}
            w={10}
            h={10}
            source={{
              uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            }}
            alt="img"
          />
          <VStack>
            <Heading
              fontSize={"md"}
              fontWeight={"bold"}
              color={darkTheme.lightGrayColor}
            >
              Trip to Guadelope
            </Heading>
            <Text fontSize={"xs"} color={darkTheme.grayColor}>
              10th September, 2022
            </Text>
          </VStack>
        </HStack>
        <Text fontSize={"xs"} color={darkTheme.grayColor}>
          Creating a dark theme color palette similar to that of the Binance app
          involves using a combination of dark and contrasting colors for
          various elements. Here's a dark theme color palette inspired by
          Binance
        </Text>
        <Progress
          w="full"
          value={random(10, 100)}
          bgColor={"coolGray.900"}
          _filledTrack={{
            bgColor: [
              "lightBlue.500",
              "rose.500",
              "success.500",
              "tertiary.500",
              "darkBlue.500",
              "indigo.500",
              "pink.500",
            ][random(1, 7)],
            opacity: 0.8,
          }}
        />
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            $200 / $500
          </Text>
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            10 days left
          </Text>
        </HStack>
      </VStack>
    </View>
  );
};

export default SavingPlanCard;

const styles = StyleSheet.create({});
