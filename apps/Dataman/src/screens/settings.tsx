import { Switch, List, View } from "@ant-design/react-native";
import * as React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";

export const SettingsScreen = () => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <List>
        <List.Item
          thumb={<AntDesign name="left" size={20} />}
          extra={<AntDesign name="ellipsis1" size={20} />}
        >
          Back
        </List.Item>
      </List>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        Settings
      </Text>
      <View>
        <List
          renderHeader={
            <Text
              style={{ color: "#969696", fontSize: 14, paddingHorizontal: 10 }}
            >
              Preview
            </Text>
          }
        >
          <List.Item
            style={styles.container}
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
        </List>
        <List>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Switch />}
          >
            <Text style={{ paddingLeft: 5 }}>Notifications</Text>
          </List.Item>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Switch />}
          >
            <Text style={{ paddingLeft: 5 }}>Attendance Shortage Alert</Text>
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Text style={{ color: "#cccccc" }}>Indian Rupee</Text>}
          >
            <Text style={{ paddingLeft: 5 }}>Change Currency</Text>
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Text style={{ color: "#cccccc" }}>English</Text>}
          >
            <Text style={{ paddingLeft: 5 }}>Change Language</Text>
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Text style={{ color: "#cccccc" }}>Metric</Text>}
          >
            <Text style={{ paddingLeft: 5 }}>Units</Text>
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={<Text style={{ color: "#cccccc" }}>987654321</Text>}
          >
            <Text style={{ paddingLeft: 5 }}>Change Mobile Number</Text>
          </List.Item>
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
