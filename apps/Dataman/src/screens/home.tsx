import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab } from "../components/Tab";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Tab />
      </View>
    </SafeAreaView>
  );
};
