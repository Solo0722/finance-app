import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { darkTheme } from "../theme/colors";

export const useNavigationBar = (coloured) => {
  const setNavbar = async () => {
    await NavigationBar.setBorderColorAsync("#00000000");
    await NavigationBar.setBackgroundColorAsync(darkTheme.bodyBackgroundColor);
  };
  useEffect(() => {
    if (Platform.OS === "android") {
      setNavbar();
    }
  }, []);
};
