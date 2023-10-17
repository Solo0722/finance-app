import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import TransactionHistoryCard from "../../components/TransactionHistoryCard";
import { FlatList, View, Button, ScrollView, Text, Link } from "native-base";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { SceneMap, TabView } from "react-native-tab-view";
import { darkTheme } from "../../theme/colors";
import VirtualizedList from "../../components/VirtualisedList";

const TransactionHistory = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "today", title: "Today" },
    { key: "yesterday", title: "Yesterday" },
    { key: "lastweek", title: "Last week" },
    { key: "lastmonth", title: "Last month" },
  ]);

  const renderScene = SceneMap({
    today: () => (
      <VirtualizedList>
        <FlatList
          w="full"
          data={[...new Array(10)]}
          //   keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionHistoryCard />}
          ItemSeparatorComponent={<View my={"1"} />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
      </VirtualizedList>
    ),
    yesterday: () => (
      <View flex="1">
        <FlatList
          w="full"
          data={[...new Array(10)]}
          //   keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionHistoryCard />}
          ItemSeparatorComponent={<View my={"1"} />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
      </View>
    ),
    lastweek: () => (
      <View flex="1">
        <FlatList
          w="full"
          data={[...new Array(10)]}
          //   keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionHistoryCard />}
          ItemSeparatorComponent={<View my={"1"} />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
      </View>
    ),
    lastmonth: () => (
      <View flex="1">
        <FlatList
          w="full"
          data={[...new Array(10)]}
          //   keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionHistoryCard />}
          ItemSeparatorComponent={<View my={"1"} />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
      </View>
    ),
  });

  const _renderTabBar = (_props) => {
    return (
      <View
        flexDir="row"
        bgColor={darkTheme.bodyBackgroundColor}
        justifyContent={"space-between"}
      >
        {_props.navigationState.routes.map((route, i) => {
          const isActive = index === i;

          return (
            <Button
              rounded="lg"
              size="xs"
              _text={{
                fontSize: "xs",
                color: isActive
                  ? darkTheme.lightGrayColor
                  : darkTheme.grayColor,
              }}
              variant={"unstyled"}
              key={i}
              bgColor={isActive ? darkTheme.accentColor3 : null}
              onPress={() => setIndex(i)}
            >
              {route.title}
            </Button>
          );
        })}
      </View>
    );
  };

  return (
    <ComponentWrapper title={"History"} secondaryBtn={{ text: "View all" }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: "100%" }}
        renderTabBar={_renderTabBar}
        tabBarPosition="top"
        swipeEnabled
        sceneContainerStyle={{
          paddingVertical: 20,
        }}
        pagerStyle={{
          // backgroundColor: "red",
          width: "100%",
          minHeight: 400,
          display: "flex",
          flex: 1,
        }}
      />
    </ComponentWrapper>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
