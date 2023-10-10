import { StyleSheet } from "react-native";
import React from "react";
import { Box, Pressable, Heading, VStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { darkTheme } from "../theme/colors";
// import { colors } from "../theme/theme";

const Tabbar = ({ state, descriptors, navigation }) => {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      // height="32"
      // backgroundColor={"#f4f8ff"}
      shadow={"6"}
      style={styles.box}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const activeIconName = options.tabBarActiveIcon;
        const inactiveIconName = options.tabBarInactiveIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={`${index}--${route.key}`}
            style={styles.tabBarItem}
            android_ripple={{ color: "", borderless: false, foreground: true }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <VStack
              space={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* <Icon
                as={Ionicons}
                name={isFocused ? activeIconName : inactiveIconName}
                size={"md"}
                color={isFocused ? "white" : "coolGray.400"}
              /> */}
              {isFocused ? activeIconName : inactiveIconName}
              <Heading
                fontSize={"10"}
                color={
                  isFocused
                    ? `${darkTheme.lightGrayColor}`
                    : `${darkTheme.grayColor}`
                }
                fontFamily={"PlusJakartaSans-regular"}
              >
                {label}
              </Heading>
            </VStack>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  box: {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: darkTheme.grayColor,
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: darkTheme.bodyBackgroundColor,
    width: "100%",
    height: 70,
  },
  tabBarItem: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
