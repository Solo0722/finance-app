import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./MainStackNavigator";
import { darkTheme } from "../theme/colors";

const RootNavigator = () => {
  return (
    <NavigationContainer
      theme={{ colors: { background: `${darkTheme.bodyBackgroundColor}` } }}
    >
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
