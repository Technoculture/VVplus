import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialApproval from "./MaterialApproval";
import PlaceOrder from "./PlaceOrder";
import { Tab } from "../components/TabBar";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        {/* <MaterialApproval /> */}
        {/* <PlaceOrder /> */}
        <Tab />
      </View>
    </SafeAreaView>
  );
};
