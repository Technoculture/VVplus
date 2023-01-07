import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, Image } from "react-native";

export const AccountScreen = ({ navigation }: any) => {
  const accountOptionsArray = [
    {
      title: (
        <Text onPress={() => navigation.navigate("SettingsScreen")}>
          Settings
        </Text>
      ),
      subtitle: "Lorem ipsum dolor sit amet, conssectetur",
    },
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
    <View className="flex-col">
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
                className="mr-4"
                source={require("../../assets/avatar.png")}
                alt="avatar"
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
          {accountOptionsArray.map((item, idx) => (
            <List.Item
              key={idx}
              style={{ borderColor: "#969696" }}
              arrow="horizontal"
            >
              {item.title}
              <List.Item.Brief>{item?.subtitle}</List.Item.Brief>
            </List.Item>
          ))}
        </List>
        <View className="flex-row justify-center items-center py-6">
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
