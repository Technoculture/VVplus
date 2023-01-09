import React, { useState } from "react";
import { Text, View } from "react-native";
import { InputItem, List, Button } from "@ant-design/react-native";
import { PageHeader } from "../components/PageHeader";

export const DailyManPowerScreen = () => {
  const [quantity, setQuantity] = useState();
  const [remarks, setRemarks] = useState();

  const DAILY_MANPOWER_LIST = [
    {
      title: "Date",
      content: "Enter Date",
    },
    {
      title: "Party Name",
      content: "Search Here",
    },
    {
      title: "Phase(Cost Center)",
      content: "Search Here",
    },
    {
      title: "Resource Type",
      content: "Search Here",
    },
  ];
  return (
    <View>
      <PageHeader text="Daily Manpower" />
      <List>
        {DAILY_MANPOWER_LIST.map((item, idx) => (
          <List.Item key={idx} arrow="horizontal">
            <Text className="text-zinc-800 text-base font-normal">
              {item.title}
            </Text>
            <Text className="text-zinc-800 text-lg font-normal">
              {item.content}
            </Text>
          </List.Item>
        ))}
      </List>
      <List>
        <List.Item>
          <Text>Quantity</Text>
          <InputItem
            type="number"
            value={quantity}
            onChange={(value: any) => {
              setQuantity(value);
            }}
          />
        </List.Item>
        <List.Item>
          <Text>Remarks</Text>
          <InputItem
            value={remarks}
            onChange={(value: any) => {
              setRemarks(value);
            }}
          />
        </List.Item>
      </List>

      <View className="flex-col justify-center items-center mb-24 mt-4">
        <Button type="primary" style={{ borderRadius: 25 }}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default DailyManPowerScreen;
