import React from "react";
import LottieView from "lottie-react-native";

const LottiePlayer = (props) => {
  return (
    <LottieView
      source={props.animation}
      autoPlay={props.autoPlay ? props.autoPlay : true}
      loop={props.loop ? props.loop : false}
      onAnimationFinish={props.onAnimationFinish && props.onAnimationFinish}
      style={props.style}
    />
  );
};

export default LottiePlayer;
