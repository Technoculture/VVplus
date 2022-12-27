import { List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NotificationScreen = () => {
  const notificationOptionsArray = ["Notification1", "Notification2"];
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        Notifications
      </Text>
      <View>
        <List>
          {notificationOptionsArray.map((item, idx) => (
            <List.Item key={idx} style={styles.container} arrow="horizontal">
              {item}
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: "#969696",
  },
});
