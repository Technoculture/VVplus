import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "@ant-design/react-native";

export const HomeScreen = () => {
  return (
    <View>
      <Text>Hello this one is the home screen for the dataman App</Text>
      <Button type="primary">Click Me!</Button>
    </View>
  );
};
