import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tab } from "../components/Tab";
import UnitCancellation from "../screens/UnitCancellation";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Tab />
        <UnitCancellation />
      </View>
    </SafeAreaView>
  );
};
