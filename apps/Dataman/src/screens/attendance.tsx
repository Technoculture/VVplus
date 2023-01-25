import { Button, List } from "@ant-design/react-native";
import * as React from "react";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import { PageHeader } from "../components/PageHeader";
import { LocationScreen } from "./Location";

export const AttendanceScreen = () => {
  const [markedInTime, setMarkedInTime] = useState(false);
  const [markedOutTime, setMarkedOutTime] = useState(false);

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

        {markedInTime && (
          <View>
            <Text>Marked In At</Text>
            <LocationScreen />
          </View>
        )}
        {markedOutTime && (
          <View>
            <Text>Marked Out At</Text>
            <LocationScreen />
          </View>
        )}

        <View className="flex flex-col justify-center items-center py-4">
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
              marginBottom: 15,
            }}
            onPress={() => {
              setMarkedInTime(!markedInTime);
              setMarkedOutTime(false);
            }}
            disabled={markedInTime === true ? true : false}
          >
            Mark In-time
          </Button>
          <Button
            type="ghost"
            style={{
              borderRadius: 25,
            }}
            onPress={() => {
              setMarkedOutTime(!markedOutTime);
              setMarkedInTime(false);
            }}
            disabled={markedOutTime === true ? true : false}
          >
            Mark Out-time
          </Button>
        </View>
      </View>
    </View>
  );
};
