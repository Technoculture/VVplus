import React from "react";
import { Text, View } from "react-native";
import { useLocation } from "../hooks/useLocation";

export const LocationScreen = () => {
  const [errorMsg, isLocationServiceEnabled, displayCurrentAddress] =
    useLocation();

  return (
    <View>
      <Text>{displayCurrentAddress}</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};
