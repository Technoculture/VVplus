import React, { useState } from "react";
import { Text, View } from "react-native";
import { InputItem, List, Button } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

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
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text className="text-zinc-800 text-base font-bold">Back</Text>
        </List.Item>
        <List.Item>
          <Text className="text-zinc-800 font-bold text-2xl">
            Daily Manpower
          </Text>
        </List.Item>
      </List>

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

      <View className="flex flex-col items-center p-5 mt-10">
        <Button
          style={{ width: "30%", height: 40, borderRadius: 48 }}
          type="primary"
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

export default DailyManPowerScreen;
