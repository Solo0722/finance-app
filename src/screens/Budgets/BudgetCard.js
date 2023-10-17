import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
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

const BudgetCard = () => {
  return (
    <View
      //   flexGrow={1}
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
        {/* <VStack space="1">
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            9 Items on budget
          </Text>
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            8 Items left
          </Text>
        </VStack> */}
        <View w="full" flexDir={"row"} flexWrap={"wrap"}>
          {[...new Array(4).keys()].map((item) => (
            <Button
              rounded={"2xl"}
              size={"xs"}
              variant={"unstyled"}
              bgColor={"coolGray.900"}
              _text={{
                color: darkTheme.grayColor,
                fontSize: "xs",
              }}
              mr="2"
            >
              Food
            </Button>
          ))}
          <Button
            rounded={"2xl"}
            size={"xs"}
            variant={"unstyled"}
            bgColor={"coolGray.900"}
            _text={{
              color: darkTheme.grayColor,
              fontSize: "xs",
            }}
            mr="2"
          >
            +3
          </Button>
        </View>
        {/* <Progress
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
        /> */}
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            $200 / $500
          </Text>
          <Text fontSize={"xs"} color={darkTheme.grayColor}>
            10 items left
          </Text>
        </HStack>
      </VStack>
    </View>
  );
};

export default BudgetCard;

const styles = StyleSheet.create({});
