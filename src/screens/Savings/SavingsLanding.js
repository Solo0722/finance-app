import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import TabHeader from "../../components/TabHeader";
import {
  IconButton,
  VStack,
  HStack,
  View,
  Text,
  Fab,
  FlatList,
} from "native-base";
import { Iconify } from "react-native-iconify";
import { darkTheme } from "../../theme/colors";
import ScreenWrapper from "../../components/ScreenWrapper";
import VirtualizedList from "../../components/VirtualisedList";
import { SceneMap, TabView } from "react-native-tab-view";
import Searchbar from "../../components/Searchbar";
import ComponentWrapper from "../../components/ComponentWrapper";
import SavingPlanCard from "./SavingPlanCard";

const SavingsLanding = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        header: () => (
          <TabHeader
            title={"Saving plans"}
            // rightComponents={[
            //   {
            //     component: (
            //       <IconButton
            //         size="sm"
            //         onPress={() => navigation.navigate(routeNames.SIGNUP)}
            //         rounded={"full"}
            //         _pressed={{
            //           bgColor: darkTheme.accentColor3,
            //         }}
            //         icon={
            //           <Iconify
            //             icon="solar:bell-bold"
            //             size={18}
            //             color={darkTheme.lightGrayColor}
            //             strokeWidth={18}
            //           />
            //         }
            //       />
            //     ),
            //   },
            // ]}
          />
        ),
      });
    }, [])
  );

  const renderToolbar = () => (
    <View w="full" my={"2"}>
      <HStack space="2" w="full" justifyContent={"space-between"}>
        <Searchbar placeholderText="Search saving plans..." />
        <IconButton
          rounded={"lg"}
          bgColor={darkTheme.accentColor3}
          _pressed={{
            bgColor: darkTheme.accentColor3,
          }}
          icon={
            <Iconify
              icon="solar:sort-outline"
              size={18}
              color={darkTheme.lightGrayColor}
              strokeWidth={18}
            />
          }
        />
      </HStack>
    </View>
  );

  return (
    <ScreenWrapper>
      {renderToolbar()}
      <VirtualizedList>
        <VStack space={"10"} pt={"5"}>
          <ComponentWrapper title={"Others"}>
            <FlatList
              w="full"
              data={[...new Array(6).keys()]}
              renderItem={() => <SavingPlanCard />}
              ItemSeparatorComponent={<View my={"2"} />}
              showsHorizontalScrollIndicator={false}
            />
          </ComponentWrapper>
        </VStack>
      </VirtualizedList>
      <Fab
        placement="bottom-right"
        renderInPortal={false}
        bottom={30}
        variant
        shadow="6"
        rounded={"lg"}
        icon={
          <Iconify
            icon="solar:add-square-bold"
            size={20}
            color={darkTheme.bodyBackgroundColor}
            strokeWidth={20}
          />
        }
        colorScheme={"darkBlue"}
        bgColor={"darkBlue.500"}
      />
    </ScreenWrapper>
  );
};

export default SavingsLanding;

const styles = StyleSheet.create({});
