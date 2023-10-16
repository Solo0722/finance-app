import { StyleSheet } from "react-native";
import { View, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { darkTheme } from "../theme/colors";
import { Iconify } from "react-native-iconify";

const Searchbar = ({ width }) => {
  return (
    <View w={width ? width : "full"}>
      <Input
        variant={"filled"}
        rounded={"lg"}
        w="full"
        borderWidth="0"
        cursorColor={"white"}
        color={"white"}
        px={"2"}
        bgColor={darkTheme.accentColor3}
        InputLeftElement={
          <Icon
            as={
              <Iconify
                icon="solar:magnifer-outline"
                size={18}
                strokeWidth={20}
              />
            }
            size={5}
            color={darkTheme.grayColor}
            ml="2"
          />
        }
        placeholder="Search budgets..."
        placeholderTextColor={darkTheme.grayColor}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
