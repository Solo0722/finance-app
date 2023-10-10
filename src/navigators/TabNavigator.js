import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { routeNames } from "../constants/routeNames";
import Tabbar from "../components/Tabbar";
import { Home } from "../screens/Home";
import Profile from "../screens/Profile/Profile";
import { Iconify } from "react-native-iconify";
import { darkTheme } from "../theme/colors";
import BudgetsLanding from "../screens/Budgets/BudgetsLanding";
import InvestLanding from "../screens/Invest/InvestLanding";
import ExploreLanding from "../screens/Explore/ExploreLanding";

const TabNavigator = () => {
  const tabs = [
    {
      name: routeNames.HOME,
      label: "Home",
      component: Home,
      activeIconName: (
        <Iconify
          icon="solar:home-angle-bold"
          size={24}
          color={darkTheme.lightGrayColor}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:home-angle-bold"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      ),
    },
    {
      name: routeNames.BUDGETS,
      label: "Budgets",
      component: BudgetsLanding,
      activeIconName: (
        <Iconify
          icon="solar:card-bold"
          size={24}
          color={darkTheme.lightGrayColor}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:card-bold"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      ),
    },
    {
      name: routeNames.INVEST,
      label: "Invest",
      component: InvestLanding,
      activeIconName: (
        <Iconify
          icon="solar:chart-2-bold"
          size={24}
          color={darkTheme.lightGrayColor}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:chart-2-bold"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      ),
    },
    {
      name: routeNames.EXPLORE,
      label: "Explore",
      component: ExploreLanding,
      activeIconName: (
        <Iconify
          icon="solar:plain-3-bold"
          size={24}
          color={darkTheme.lightGrayColor}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:plain-3-bold"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      ),
    },
    {
      name: routeNames.PROFILE,
      label: "Profile",
      component: Profile,
      activeIconName: (
        <Iconify
          icon="solar:user-bold"
          size={24}
          color={darkTheme.lightGrayColor}
          strokeWidth={20}
        />
      ),
      inactiveIconName: (
        <Iconify
          icon="solar:user-bold"
          size={24}
          color={darkTheme.grayColor}
          strokeWidth={20}
        />
      ),
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <Tabbar {...props} />;
      }}
      initialRouteName={routeNames.TAB}
      sceneContainerStyle={{
        backgroundColor: `${darkTheme.bodyBackgroundColor}`,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
      }}
    >
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={index + _.name}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarActiveIcon: _.activeIconName,
              tabBarInactiveIcon: _.inactiveIconName,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
