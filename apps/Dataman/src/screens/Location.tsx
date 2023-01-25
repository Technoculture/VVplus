import React from "react";
import { Text, View } from "react-native";
import { useLocation } from "../components/useLocation";

export const LocationScreen = () => {
  const [errorMsg, locationServiceEnabled, displayCurrentAddress] =
    useLocation();

  return (
    <View>
      <Text>{displayCurrentAddress}</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};
