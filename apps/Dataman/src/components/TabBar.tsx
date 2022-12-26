import React, { useState } from "react";
import { View, TabBar } from "@ant-design/react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Purchase from "../screens/Purchase";
import MaterialRequest from "../screens/MaterialRequest";
import Receipt from "../screens/Receipt";

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
          selected={selectedTab === "Purchase"}
          onPress={() => {
            changeTab("Purchase");
          }}
          title=""
        >
          <Purchase />
        </TabBar.Item>
        <TabBar.Item
          icon={
            <MaterialCommunityIcons
              name="truck-outline"
              size={20}
              selectedcolor="black"
            />
          }
          selected={selectedTab === "Material Request"}
          onPress={() => {
            changeTab("Material Request");
          }}
          title=""
        >
          <MaterialRequest />
        </TabBar.Item>

        <TabBar.Item
          icon={<Octicons name="list-unordered" size={20} />}
          selected={selectedTab === "Material Approval"}
          onPress={() => {
            changeTab("Material Approval");
          }}
          title=""
        >
          <Receipt />
        </TabBar.Item>
      </TabBar>
    </View>
  );
};
