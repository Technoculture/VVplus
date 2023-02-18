import * as React from "react";
import { Switch, List } from "@ant-design/react-native";
import { Text, Image, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { settingsOptionsArray } from "../components/listComponents/SettingsList";

export const SettingsScreen = () => {
  return (
    <View className="flex-col">
      <PageHeader text="Settings" />
      <View>
        <List
          renderHeader={
            <Text className="text-gray-500 text-sm px-2">Preview</Text>
          }
        >
          <List.Item
            style={{ borderColor: "#969696" }}
            thumb={
              <Image
                style={{ marginRight: 15 }}
                source={require("../../assets/avatar.png")}
                alt=""
              />
            }
          >
            <Text>Matt Wierzbicki</Text>
            <List.Item.Brief>
              <Text>Profile Rating: 5 stars</Text>
            </List.Item.Brief>
          </List.Item>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Switch />}
          >
            <Text className="pl-1">Notifications</Text>
          </List.Item>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Switch />}
          >
            <Text className="pl-1">Attendance Shortage Alert</Text>
          </List.Item>
          {settingsOptionsArray.map(
            (item: { title: string; subtitle: string }, idx) => (
              <List.Item
                key={idx}
                arrow="horizontal"
                thumb={<Octicons name="list-unordered" size={20} />}
                extra={<Text className="text-gray-400">{item.subtitle}</Text>}
              >
                <Text className="pl-1">{item.title}</Text>
              </List.Item>
            )
          )}
        </List>
      </View>
    </View>
  );
};
