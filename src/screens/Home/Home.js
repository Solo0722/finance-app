import { StyleSheet } from "react-native";
import React, { useCallback, useContext } from "react";
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
import { routeNames, storageKeys } from "../../constants/routeNames";
import { readFromAsyncStorage } from "../../services/dataServices";
import { GlobalContext } from "../../context/ContextProvider";
import { useEffect } from "react";
import moment from "moment";
import BudgetForMonth from "./BudgetForMonth";
import SavingsForMonth from "./SavingsForMonth";

const Home = ({ navigation }) => {
  const { loggedInUser } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        header: () => (
          <TabHeader
            leftComponents={[
              {
                component: (
                  <HStack
                    space="2"
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Avatar
                      size={9}
                      rounded={"full"}
                      _image={{
                        rounded: "full",
                        width: 9,
                        height: 9,
                      }}
                      source={{
                        uri: loggedInUser?.userImg
                          ? loggedInUser.userImg
                          : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                      }}
                    />
                    <VStack space={"1"}>
                      <Heading fontSize="md">{loggedInUser?.fullName}</Heading>
                      <Text fontSize="xs" color={darkTheme.grayColor}>
                        {moment().format("Do MMMM YYYY")}
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
                    rounded={"lg"}
                    bgColor={darkTheme.accentColor3}
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
            ]}
          />
        ),
      });
    }, [])
  );

  return (
    <ScreenWrapper>
      <VirtualizedList>
        <VStack space={"6"} pt={"5"}>
          <BankCard />
          <QuickAccess />
          <BudgetForMonth />
          <SavingsForMonth />
          <TransactionHistory />
        </VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
