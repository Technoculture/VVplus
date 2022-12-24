import React, { useState } from "react";
import { View, TabBar } from "@ant-design/react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import SalesScreens from "../screens/SalesScreen";
import WorkEntry from "../screens/WorkEntry";
import UnitCancellation from "../screens/UnitCancellation";
import Cheque from "../screens/Cheque";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const changeTab = (tabName: any) => {
    setSelectedTab(tabName);
  };

  return (
    <View
      style={{
        height: "100%",
        bottom: 0,
      }}
    >
      <TabBar
        unselectedTintColor="#999999"
        tintColor="##0000FF"
        barTintColor="#ffffff"
      >
        <TabBar.Item
          icon={<SimpleLineIcons name="user" size={20} />}
          selected={selectedTab === "SalesScreens"}
          onPress={() => {
            changeTab("SalesScreens");
          }}
          title=""
        >
          <SalesScreens />
        </TabBar.Item>
        <TabBar.Item
          icon={
            <MaterialCommunityIcons
              name="truck-outline"
              size={20}
              selectedcolor="black"
            />
          }
          selected={selectedTab === "cancellationScreens"}
          onPress={() => {
            changeTab("cancellationScreens");
          }}
          title=""
        >
          <UnitCancellation />
        </TabBar.Item>

        <TabBar.Item
          icon={<Octicons name="list-unordered" size={20} />}
          selected={selectedTab === "WorkEntry"}
          onPress={() => {
            changeTab("WorkEntry");
          }}
          title=""
        >
          <WorkEntry />
          {/* <Cheque /> */}
        </TabBar.Item>
      </TabBar>
    </View>
  );
};
