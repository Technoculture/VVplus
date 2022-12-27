import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export const AttendanceScreen = () => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        Attendance
      </Text>
      <View style={{ height: "100%", flexDirection: "column" }}>
        <List
          style={{ marginVertical: 10 }}
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
              />
            }
          >
            <Text>UserName</Text>
            <List.Item.Brief>
              <Text>Attendance Percentage: 75%</Text>
            </List.Item.Brief>
          </List.Item>
        </List>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
              marginBottom: 15,
            }}
          >
            Mark In-time
          </Button>
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
            }}
          >
            Mark Out-time
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: "#969696",
  },
});
