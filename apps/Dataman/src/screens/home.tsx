import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "@ant-design/react-native";
import { LoginScreen } from "./LoginScreen";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <LoginScreen />
      </View>
    </SafeAreaView>
  );
};
