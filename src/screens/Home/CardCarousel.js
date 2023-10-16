import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import Carousel from "react-native-reanimated-carousel";
import { Button, Image, Pressable, VStack, View } from "native-base";
import Animated, {
  FadeInRight,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Iconify } from "react-native-iconify";
import SkeletonArray from "../../components/SkeletonArray";
import { getTopAlbums } from "../../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../../constants/routeNames";
import BankCard from "./BankCard";
import { darkTheme } from "../../theme/colors";

const CardCarousel = () => {
  const navigation = useNavigation();

  const [mode, setMode] = React.useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = React.useState("left");
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const [loop, setLoop] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState(false);

  const data = React.useRef([...new Array(6).keys()]).current;
  const viewCount = 2;

  // const SBItem = (props) => {
  //   const { style, index, pretty, testID, ...animatedViewProps } = props;
  //   return (
  //     <Animated.View
  //       testID={testID}
  //       style={{ flex: 1, width: "100%", height: 200, backgroundColor: "red" }}
  //       {...animatedViewProps}
  //     ></Animated.View>
  //   );
  // };

  return (
    <View>
      <VStack space="2" w="full">
        <Carousel
          style={{
            width: "100%",
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          width={390}
          height={200}
          pagingEnabled={pagingEnabled}
          snapEnabled={snapEnabled}
          mode={mode}
          loop={loop}
          autoPlay={autoPlay}
          autoPlayReverse={autoPlayReverse}
          data={data}
          modeConfig={{
            snapDirection,
            stackInterval: 18,
          }}
          customConfig={() => ({ type: "positive", viewCount })}
          // renderItem={({ item }) => <BankCard item={item} index={index}
          //     key={index}
          //     entering={FadeInRight.delay(
          //       (viewCount - index) * 100,
          //     ).duration(200)}/>}
          renderItem={({ item, index }) => (
            <BankCard
              item={item}
              index={index}
              key={index}
              entering={FadeInRight.delay((viewCount - index) * 100).duration(
                200
              )}
            />
          )}
        />
        <Button
          size="xs"
          // maxW={"32"}
          px={"0"}
          opacity={"0.5"}
          justifyContent={"flex-end"}
          variant="unstyled"
          _text={{
            color: "success.500",
          }}
          _icon={{
            color: "success.500",
          }}
          startIcon={
            <Iconify
              icon="solar:add-circle-bold"
              size={16}
              color={darkTheme.success}
              strokeWidth={16}
            />
          }
        >
          Add new account
        </Button>
      </VStack>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
