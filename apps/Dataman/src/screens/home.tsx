import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { LoginScreen } from "./LoginScreen";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-screen">
        <LoginScreen />
      </View>
    </SafeAreaView>
  );
};
