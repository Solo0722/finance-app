import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { darkTheme } from "../theme/colors";

export const useStatusBar = (coloured) => {
  useEffect(() => {
    if (Platform.OS === "android") {
      if (coloured) {
        StatusBar.setBackgroundColor(darkTheme.primaryColor, true);
        StatusBar.setBarStyle("light-content");
      } else {
        StatusBar.setBackgroundColor(darkTheme.bodyBackgroundColor);
        StatusBar.setBarStyle("light-content");
      }
    } else {
      if (coloured) StatusBar.setBarStyle("light-content");
      else StatusBar.setBarStyle("dark-content");
    }
  }, []);
};
