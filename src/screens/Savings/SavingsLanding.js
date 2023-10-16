import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import VirtualizedList from "../../components/VirtualisedList";
import Searchbar from "../../components/Searchbar";
import { IconButton, VStack } from "native-base";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import TabHeader from "../../components/TabHeader";
import { routeNames } from "../../constants/routeNames";

const SavingsLanding = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        header: () => (
          <TabHeader
            title={"Invest"}
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
            ]}
          />
        ),
      });
    }, [])
  );

  return (
    <ScreenWrapper>
      <VirtualizedList>
        <VStack space="4"></VStack>
      </VirtualizedList>
    </ScreenWrapper>
  );
};

export default SavingsLanding;

const styles = StyleSheet.create({});
