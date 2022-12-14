import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const AccountScreen = () => {
  const listArray = [
    { title: "Settings", subtitle: "Lorem ipsum dolor sit amet, conssectetur" },
    {
      title: "Request Advance",
      subtitle: "Lorem ipsum dolor sit amet, conssectetur",
    },
    {
      title: "File Incentive",
      subtitle: "Lorem ipsum dolor sit amet, conssectetur",
    },
    {
      title: "Leave Application",
      subtitle: "Lorem ipsum dolor sit amet, conssectetur",
    },
  ];
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
        Account
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
          {listArray.map((item, idx) => (
            <List.Item
              key={idx}
              style={styles.container}
              extra={<AntDesign name="right" size={20} color="#969696" />}
            >
              {item.title}
              <List.Item.Brief>{item?.subtitle}</List.Item.Brief>
            </List.Item>
          ))}
        </List>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
            }}
          >
            Mark Attendance
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
