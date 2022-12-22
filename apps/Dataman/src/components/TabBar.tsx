import React from "react";
import { Tabs, View, Text } from "@ant-design/react-native";
import { TouchableOpacity } from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const TabBar = () => {
  const tabs = [
    { title: <SimpleLineIcons name="user" size={20} /> },
    {
      title: <MaterialCommunityIcons name="truck-outline" size={20} />,
    },
    { title: <Octicons name="list-unordered" size={20} /> },
  ];

  return (
    <View>
      <View style={{ height: 30 }}>
        <Tabs
          tabs={tabs}
          renderTabBar={(tabProps) => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {tabProps.tabs.map((tab, i) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={{
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps;
                    onTabClick && onTabClick(tabs[i], i);
                    goToTab && goToTab(i);
                  }}
                >
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? "black" : "#969696",
                    }}
                  >
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        ></Tabs>
      </View>
    </View>
  );
};

export default TabBar;
