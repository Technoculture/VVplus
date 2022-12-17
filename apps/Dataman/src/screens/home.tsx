import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Purchase from "./Purchase";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <Purchase />
      </View>
    </SafeAreaView>
  );
};
