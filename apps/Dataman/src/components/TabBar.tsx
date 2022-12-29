import React, { useState } from "react";
import { TabBar } from "@ant-design/react-native";
import { View } from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const changeTab = (tabName: any) => {
    setSelectedTab(tabName);
  };

  return (
    <View className="h-full">
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
        ></TabBar.Item>
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
        ></TabBar.Item>

        <TabBar.Item
          icon={<Octicons name="list-unordered" size={20} />}
          selected={selectedTab === "Material Approval"}
          onPress={() => {
            changeTab("Material Approval");
          }}
          title=""
        ></TabBar.Item>
      </TabBar>
    </View>
  );
};
