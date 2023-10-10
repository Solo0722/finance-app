import React from "react";
import { View } from "native-base";

const ScreenWrapper = ({ containerStyles, children }) => {
  return (
    <View flex={1} style={containerStyles} px="4">
      {children}
    </View>
  );
};

export default ScreenWrapper;
