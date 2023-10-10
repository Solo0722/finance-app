import { StyleSheet } from "react-native";
import { View, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { darkTheme } from "../theme/colors";
import { Iconify } from "react-native-iconify";

const Searchbar = () => {
  return (
    <View mb="2">
      <Input
        variant={"filled"}
        rounded={"lg"}
        borderWidth="0"
        cursorColor={"white"}
        color={"white"}
        px={"2"}
        mt="0"
        bgColor={darkTheme.accentColor3}
        placeholderTextColor={"coolGray.400"}
        InputLeftElement={
          <Iconify
            icon="solar:magnifer-outline"
            size={22}
            color="#aaa"
            strokeWidth={20}
            style={{ marginHorizontal: 5 }}
          />
        }
        placeholder="Search by name or keyword"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
