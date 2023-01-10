import { List } from "@ant-design/react-native";
import * as React from "react";
import { View } from "react-native";

export const NotificationScreen = () => {
  const notificationOptionsArray = ["Notification1", "Notification2"];
  return (
    <View className="flex-col">
      <View>
        <List>
          {notificationOptionsArray.map((item, idx) => (
            <List.Item
              key={idx}
              style={{ borderColor: "#969696" }}
              arrow="horizontal"
            >
              {item}
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
