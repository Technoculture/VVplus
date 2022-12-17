import React from "react";
import { Tabs, View, Text } from "@ant-design/react-native";
import { TouchableOpacity } from "react-native";

const TabBar = () => {
  const tabs = [
    { title: "First Tab" },
    { title: "Second Tab" },
    { title: "Third Tab" },
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
                      color: tabProps.activeTab === i ? "red" : "#333333",
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
