import { List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const NotificationScreen = () => {
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
          {["Notification1", "Notification2"].map((item, idx) => (
            <List.Item
              key={idx}
              style={styles.container}
              extra={<AntDesign name="right" size={20} color="#969696" />}
            >
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
