import "react-native-gesture-handler";
import { useEffect } from "react";
import { setCustomTextInput, setCustomText } from "react-native-global-props";
import RootNavigator from "./src/navigators/RootNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { darkTheme } from "./src/theme/colors";
import nativebaseTheme from "./src/theme/nativeBaseTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useStatusBar } from "./src/hooks/useStatusBar";
import { useNavigationBar } from "./src/hooks/useNavigationBar";
import { StoreProvider } from "./src/store/Store";

export default function App() {
  useStatusBar();
  useNavigationBar();
  const [fontsLoaded, error] = useFonts({
    "PlusJakartaSans-extraLight": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraLight.ttf"),
    "PlusJakartaSans-extraLight-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraLightItalic.ttf"),
    "PlusJakartaSans-light": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-Light.ttf"),
    "PlusJakartaSans-light-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-LightItalic.ttf"),
    "PlusJakartaSans-regular": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-regular-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-Italic.ttf"),
    "PlusJakartaSans-medium": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-medium-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-MediumItalic.ttf"),
    "PlusJakartaSans-semibold": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-semibold-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBoldItalic.ttf"),
    "PlusJakartaSans-bold": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-bold-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-BoldItalic.ttf"),
    "PlusJakartaSans-extrabold": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf"),
    "PlusJakartaSans-extrabold-italic": require("./src/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBoldItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  setCustomText({
    style: {
      fontFamily: "PlusJakartaSans-regular",
      color: `${darkTheme.textColor}`,
    },
  });

  setCustomTextInput({ style: { fontFamily: "PlusJakartaSans-regular" } });

  const queryClient = new QueryClient();

  return (
    <StoreProvider>
      <NativeBaseProvider theme={nativebaseTheme}>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </NativeBaseProvider>
    </StoreProvider>
  );
}
