import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import TabNavigator from "./TabNavigator";
import { routeNames } from "../constants/routeNames";
import { darkTheme } from "../theme/colors";
import Login from "../screens/Authentication/Login";
import Signup from "../screens/Authentication/Signup";
import VerifyNumber from "../screens/Authentication/VerifyNumber";
import BanksSetup from "../screens/Authentication/BanksSetup";
import AuthComplete from "../screens/Authentication/AuthComplete";
enableScreens();

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={routeNames.TAB}
      screenOptions={{
        cardStyle: { backgroundColor: `${darkTheme.bodyBackgroundColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name={routeNames.TAB} component={TabNavigator} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name={routeNames.SIGNIN} component={Login} />
        <Stack.Screen name={routeNames.SIGNUP} component={Signup} />
        <Stack.Screen name={routeNames.VERIFYNUMBER} component={VerifyNumber} />
        <Stack.Screen name={routeNames.BANKSETUP} component={BanksSetup} />
        <Stack.Screen
          name={routeNames.VERIFICATIONCOMPLETE}
          component={AuthComplete}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
