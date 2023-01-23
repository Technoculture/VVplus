import * as React from "react";
import { Button, List } from "@ant-design/react-native";
import { View, Text, Image } from "react-native";
import { accountOptionsArray } from "../components/listComponents/AccountList";

export const AccountScreen = ({ navigation }: any) => {
  return (
    <View className="flex-col">
      <View>
        <List>
          <List.Item>
            <Text className="text-gray-500 text-lg">Preview</Text>
          </List.Item>
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
            <Text>Matt Weirzbicki</Text>
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
              onPress={() =>
                navigation.navigate("Settings", {
                  item,
                })
              }
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
            onPress={() => {
              navigation.navigate("attendance");
            }}
          >
            Mark Attendance
          </Button>
        </View>
      </View>
    </View>
  );
};
