import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContractorScreen } from "./Contractor";
import DailyManPowerScreen from "./DailyManPower";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <ContractorScreen /> */}
        <DailyManPowerScreen />
      </View>
    </SafeAreaView>
  );
};
