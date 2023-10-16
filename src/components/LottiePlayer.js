import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const LottiePlayer = (props) => {
  const animation = useRef();

  return (
    <LottieView
      source={props.animation}
      autoPlay={props.autoPlay ? props.autoPlay : true}
      loop={props.loop ? props.loop : false}
      onAnimationFinish={props.onAnimationFinish && props.onAnimationFinish}
      style={[props.style, { width: 200, height: 200 }]}
      ref={animation}
    />
  );
};

export default LottiePlayer;
