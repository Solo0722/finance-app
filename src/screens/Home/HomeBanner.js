import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import Carousel from "react-native-reanimated-carousel";
import { Image, Pressable, View } from "native-base";
import Animated, {
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

const HomeBanner = () => {
  const navigation = useNavigation();

  const width = Dimensions.get("window").width - 30;

  const BannerItemCard = ({ item }) => {
    return (
      <Pressable android_ripple={{ color: "", foreground: true }}>
        <View
          height={260}
          width={"full"}
          justifyContent={"center"}
          rounded="lg"
          borderRadius={"lg"}
          bgColor="black"
        >
          {/* <ImageBackground
            source={{
              uri: "https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/card-art/Passport_Visa_Infinite_E_Business.png",
            }}
            alt="song image"
            imageStyle={{
              borderRadius: 8,
              objectFit: "cover",
              height: 260,
              width: "100%",
            }}
          >
            <LinearGradient
              colors={["transparent", "#000"]}
              // start={[0, 0.5]}
              style={styles.linearGradient}
            ></LinearGradient>
          </ImageBackground> */}
          <Image
            source={{
              uri: "https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/card-art/Passport_Visa_Infinite_E_Business.png",
            }}
            width={"full"}
            height={"full"}
            alt="image"
            rounded={"lg"}
            borderRadius={"lg"}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      {/* <Carousel
        loop
        width={width}
        style={{ padding: 0, margin: 0 }}
        height={270}
        autoPlay={false}
        data={[1]}
        scrollAnimationDuration={1200}
        // customAnimation={animationStyle}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => <BannerItemCard item={item} />}
      /> */}
      <BannerItemCard />
    </View>
  );
};

export default HomeBanner;

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
