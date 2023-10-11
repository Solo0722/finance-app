import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Avatar, HStack, Heading, IconButton, Text, VStack } from "native-base";
import VirtualizedList from "../../components/VirtualisedList";
import { useFocusEffect } from "@react-navigation/native";
import TabHeader from "../../components/TabHeader";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import { routeNames } from "../../constants/routeNames";
import ProfileCard from "./ProfileCard";
import SettingsList from "./SettingsList";

const Profile = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        header: () => (
          <TabHeader
            rightComponents={[
              {
                component: (
                  <IconButton
                    size="sm"
                    onPress={() => navigation.navigate(routeNames.SIGNUP)}
                    rounded={"full"}
                    _pressed={{
                      bgColor: darkTheme.accentColor3,
                    }}
                    icon={
                      <Iconify
                        icon="solar:bell-bold"
                        size={18}
                        color={darkTheme.lightGrayColor}
                        strokeWidth={18}
                      />
                    }
                  />
                ),
              },
              {
                component: (
                  <IconButton
                    size="sm"
                    rounded={"full"}
                    _pressed={{
                      bgColor: darkTheme.accentColor3,
                    }}
                    icon={
                      <Iconify
                        icon="solar:settings-bold"
                        size={18}
                        color={darkTheme.lightGrayColor}
                        strokeWidth={18}
                      />
                    }
                  />
                ),
              },
            ]}
          />
        ),
      });
    }, [])
  );

  return (
    <ScreenWrapper>
      <VirtualizedList>
        <VStack space={"10"} pt={"5"}>
          <ProfileCard />
          <SettingsList />
        </VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});
