import { StyleSheet } from "react-native";
import React from "react";
import { HStack, Heading, Icon, Image, Text, VStack, View } from "native-base";
import { darkTheme } from "../theme/colors";
import { Iconify } from "react-native-iconify";
import { random } from "lodash";

const TransactionHistoryCard = () => {
  return (
    <View
      w="full"
      h={70}
      bgColor={darkTheme.accentColor3}
      rounded="lg"
      px="2"
      py="4"
      flexDir="row"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack space={"2"} alignItems={"center"} h="full">
        <Image
          rounded={"lg"}
          w={10}
          bgColor="coolGray.800"
          h={"full"}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          }}
          alt="img"
        />
        <VStack space="1">
          <Heading
            fontSize={"sm"}
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
      <HStack space={"1"}>
        <Icon
          as={
            <Iconify
              icon="solar:arrow-right-up-outline"
              size={18}
              strokeWidth={20}
            />
          }
          size={5}
          opacity={"0.5"}
          color={["danger.500", "success.500"][random(0, 1)]}
        />
        <Text
          fontSize={"xs"}
          opacity={"0.5"}
          color={["danger.500", "success.500"][random(0, 1)]}
        >
          $500.00
        </Text>
      </HStack>
    </View>
  );
};

export default TransactionHistoryCard;

const styles = StyleSheet.create({});
