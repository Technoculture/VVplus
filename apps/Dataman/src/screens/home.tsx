import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Purchase from "./Purchase";
import PurchasePage from "./PurchasePage";
import MaterialPage from "./Material";
import PlaceOrder from "./PlaceOrder";
import Receipt from "./Receipt";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        {/* <Purchase /> */}
        {/* <PurchasePage /> */}
        {/* <MaterialPage /> */}
        {/* <PlaceOrder /> */}
        <Receipt />
      </View>
    </SafeAreaView>
  );
};
