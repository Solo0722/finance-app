import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { darkTheme } from "../../theme/colors";
import { View } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const BankCard = () => {
  return (
    <View w="full" h={200} bgColor={darkTheme.accentColor3} rounded={"lg"}>
      <LinearGradient
        start={{ x: 1.0, y: 1.0 }}
        end={{ x: 0.0, y: 0.0 }}
        colors={[
          darkTheme.primaryColor,
          darkTheme.primaryColor,
          darkTheme.lightPrimaryColor,
        ]}
        style={styles.gradient}
      >
        <LinearGradient
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
          style={styles.gradient}
        >
          <ImageBackground
            style={styles.imageBg}
            source={require("../../assets/images/cardlines.png")}
          >
            <View flex="1"></View>
          </ImageBackground>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderRadius: 10,
  },
  imageBg: {
    flex: 1,
    borderRadius: 10,
  },
});
export default BankCard;
