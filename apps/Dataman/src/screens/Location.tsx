import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

export const LocationScreen = () => {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>Marked In At: {text}</Text>
    </View>
  );
};
