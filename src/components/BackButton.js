import { StyleSheet } from "react-native";
import React from "react";
import { Icon, IconButton, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { darkTheme } from "../theme/colors";

const BackButton = ({ styles }) => {
  const { goBack } = useNavigation();

  return (
    <IconButton
      variant={"ghost"}
      colorScheme={"coolGray"}
      rounded={"full"}
      style={styles}
      icon={
        <Iconify
          icon="solar:round-arrow-left-outline"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      }
      onPress={() => goBack()}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({});
