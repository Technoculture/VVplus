import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Purchase from "./Purchase";
import Material from "./Material";
import MaterialApproval from "./MaterialApproval";
import PlaceOrder from "./PlaceOrder";
import Receipt from "./Receipt";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <Purchase />
        {/* <Material /> */}
        {/* <MaterialApproval /> */}
        {/* <PlaceOrder /> */}
        {/* <Receipt /> */}
      </View>
    </SafeAreaView>
  );
};
