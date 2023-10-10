import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Avatar, HStack, Heading, IconButton, Text, VStack } from "native-base";
import VirtualizedList from "../../components/VirtualisedList";
import { useFocusEffect } from "@react-navigation/native";
import TabHeader from "../../components/TabHeader";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import QuickAccess from "./QuickAccess";
import BankCard from "./BankCard";
import TransactionHistory from "./TransactionHistory";
import { routeNames } from "../../constants/routeNames";

const Home = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        header: () => (
          <TabHeader
            leftComponents={[
              {
                component: (
                  <HStack space="2" justifyContent={"center"}>
                    <Avatar
                      size={10}
                      rounded={"full"}
                      _image={{
                        rounded: "full",
                        width: 10,
                        height: 10,
                      }}
                      source={{
                        uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                      }}
                    />
                    <VStack space={"1"}>
                      <Heading fontSize="md">Owusu Solomon</Heading>
                      <Text fontSize="xs" color={darkTheme.grayColor}>
                        20th October 2023
                      </Text>
                    </VStack>
                  </HStack>
                ),
              },
            ]}
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
          <BankCard />
          <QuickAccess />
          <TransactionHistory />
        </VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
