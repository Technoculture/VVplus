import { Switch, List } from "@ant-design/react-native";
import * as React from "react";
import { Text, Image, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export const SettingsScreen = () => {
  const settingsOptionsArray = [
    {
      title: "Change Currency",
      subtitle: "Indian Rupee",
    },

    {
      title: "Change Language",
      subtitle: "English",
    },
    {
      title: "Units",
      subtitle: "Metric",
    },
    {
      title: "Change Mobile No.",
      subtitle: "987654321",
    },
  ];
  return (
    <View className="flex-col">
      <NavBar />
      <Text className="text-3xl font-semibold py-1 px-2">Settings</Text>
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
            <Text>UserName</Text>
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
