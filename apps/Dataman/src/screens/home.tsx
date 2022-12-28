import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Purchase from "./Purchase";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-screen">
        <Purchase />
      </View>
    </SafeAreaView>
  );
};
