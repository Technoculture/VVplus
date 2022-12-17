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
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={
              <View>
                <Text style={{ fontSize: 10 }}>Indian Rupee</Text>
                <AntDesign name="right" size={14} color="#969696" />
              </View>
            }
          >
            <Text style={{ paddingLeft: 5 }}>Change Currency</Text>
          </List.Item>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={
              <View>
                <Text style={{ fontSize: 10 }}>Indian Rupee</Text>
                <AntDesign name="right" size={14} color="#969696" />
              </View>
            }
          >
            <Text style={{ paddingLeft: 5 }}>Change Language</Text>
          </List.Item>
          <List.Item
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={
              <View>
                <Text style={{ fontSize: 10 }}>Indian Rupee</Text>
                <AntDesign name="right" size={14} color="#969696" />
              </View>
            }
          >
            <Text style={{ paddingLeft: 5 }}>Units</Text>
          </List.Item>
          <List.Item
            align="middle"
            thumb={<Octicons name="list-unordered" size={20} />}
            extra={
              <View>
                <AntDesign name="right" size={14} color="#969696" />
              </View>
            }
          >
            <List.Item.Brief style={{ width: "50%", textAlign: "right" }}>
              <Text>Indian Rupee</Text>
            </List.Item.Brief>
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
