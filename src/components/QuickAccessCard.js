import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Center, Circle, Text, VStack, View } from "native-base";
import { darkTheme } from "../theme/colors";
import { Iconify } from "react-native-iconify";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../constants/routeNames";

const QuickAccessCard = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      android_ripple={{
        color: `${darkTheme.grayColor}`,
        foreground: true,
      }}
      rounded="lg"
      onPress={() => navigate(item.toPage)}
    >
      <View rounded={"lg"} w="24" h={"24"} bgColor={darkTheme.accentColor3}>
        <Center flex="1">
          <VStack space="1" justifyContent="center" alignItems="center">
            {item.icon}
            <Text fontSize={8}>{item.name}</Text>
          </VStack>
        </Center>
      </View>
    </Pressable>
  );
};

export default QuickAccessCard;

const styles = StyleSheet.create({});
