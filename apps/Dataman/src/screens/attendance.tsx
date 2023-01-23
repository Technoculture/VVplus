import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import { PageHeader } from "../components/PageHeader";
import { LocationScreen } from "./Location";

export const AttendanceScreen = () => {
  const [location, setLocation] = useState(false);

  const handleSubmit = () => {
    if (location === false && "Mark-in-time") {
      setLocation(true);
    }
    if (location === true && "Mark-out-time") {
      setLocation(false);
    }
  };
  return (
    <View className="flex-col">
      <PageHeader text="Attendance" />
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
                className="mr-4"
                source={require("../../assets/avatar.png")}
                alt="username"
              />
            }
          >
            <Text>Matt Weirzbicki</Text>
            <List.Item.Brief>
              <Text>Attendance Percentage: 75%</Text>
            </List.Item.Brief>
          </List.Item>
        </List>

        {location ? <LocationScreen /> : null}

        <View className="flex flex-col justify-center items-center py-4">
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
              marginBottom: 15,
            }}
            onPress={() => {
              handleSubmit();
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
