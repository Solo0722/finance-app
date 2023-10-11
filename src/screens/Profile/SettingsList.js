import { StyleSheet } from "react-native";
import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import {
  Divider,
  FlatList,
  HStack,
  Heading,
  SectionList,
  Switch,
  Text,
  View,
} from "native-base";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";

const SettingsList = () => {
  const settings = [
    {
      title: "Customize",
      data: [
        {
          name: "Theme",
          icon: (
            <Iconify
              icon="solar:pallete-2-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
        {
          name: "Notifications",
          icon: (
            <Iconify
              icon="solar:bell-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
        {
          name: "Account Sync",
          icon: (
            <Iconify
              icon="solar:refresh-circle-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          // component: <Switch my="0" p="0" size={"sm"} />,
        },
        {
          name: "Widget",
          icon: (
            <Iconify
              icon="solar:widget-add-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          name: "Share app",
          icon: (
            <Iconify
              icon="solar:share-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
        {
          name: "Feedback",
          icon: (
            <Iconify
              icon="solar:document-add-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
        {
          name: "Donate",
          icon: (
            <Iconify
              icon="solar:heart-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: "",
        },
        {
          name: "Version",
          icon: (
            <Iconify
              icon="solar:layers-bold"
              size={20}
              color={darkTheme.grayColor}
              strokeWidth={20}
            />
          ),
          component: (
            <Text fontSize={"sm"} color={darkTheme.grayColor}>
              1.7.1.0
            </Text>
          ),
        },
      ],
    },
  ];

  const SettingItem = ({ item }) => (
    <View
      w="full"
      py="4"
      px="2"
      rounded={"lg"}
      flexDir={"row"}
      justifyContent={"space-between"}
      bgColor={darkTheme.accentColor3}
    >
      <HStack space="3">
        {item.icon}
        <Heading fontSize={"sm"}>{item.name}</Heading>
      </HStack>
      {item.component}
    </View>
  );

  const SectionHeader = ({ title }) => (
    <View w="full" my="2">
      <Text fontSize={"xs"} color={darkTheme.grayColor}>
        {title}
      </Text>
    </View>
  );

  return (
    <SectionList
      w="full"
      sections={settings}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <SettingItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      SectionSeparatorComponent={() => <View my="2" />}
      ItemSeparatorComponent={() => <View my="2" />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SettingsList;

const styles = StyleSheet.create({});
