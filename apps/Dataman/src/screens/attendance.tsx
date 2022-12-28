import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { View, Text, Image } from "react-native";
import NavBar from "../components/NavBar";

export const AttendanceScreen = () => {
  return (
    <View className="flex-col">
      <NavBar />
      <Text className="text-3xl font-semibold py-1 px-2">Attendance</Text>
      <View className="h-full flex-col">
        <List
          style={{ marginVertical: 10 }}
          renderHeader={
            <Text className="text-gray-400 text-sm px-2">Preview</Text>
          }
        >
          <List.Item
            style={{
              borderColor: "#969696",
            }}
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
        <View className="flex-[1] flex-col justify-center items-center">
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
