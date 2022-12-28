import { ScrollView, View, Text } from "react-native";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Button, InputItem, List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

const StockReceive = () => {
  const [quantity, setQuantity] = useState<string>();
  const [rate, setRate] = useState<string>();
  const [remarks, setRemarks] = useState<string>();
  const stockFormOptions = [
    {
      label: "Voucher Type",
      placeholder: "Search Here",
      icon: "questioncircleo",
    },
    {
      label: "Indentor Name",
      placeholder: "Search Here",
    },
    {
      label: "Department Name",
      placeholder: "Search Here",
    },
    {
      label: "Choose Phase(Cost Center)",
      placeholder: "Search Here",
    },
  ];
  return (
    <View>
      <NavBar />
      <ScrollView>
        <List style={{ marginBottom: 10 }}>
          <List.Item>
            <Text className="text-3xl font-semibold py-1 px-2">
              Stock Receive Entry
            </Text>
          </List.Item>
          {stockFormOptions.map(
            (
              item: { label: string; placeholder: string; icon?: string },
              idx
            ) => (
              <List.Item key={idx} arrow="horizontal">
                <List.Item.Brief>
                  <Text>{item.label}</Text>
                  {item.icon !== undefined ? (
                    <AntDesign name={item.icon} />
                  ) : null}
                </List.Item.Brief>
                {item.placeholder}
              </List.Item>
            )
          )}
        </List>
        <Text className="text-center text-gray-400 text-base">Stock</Text>
        <List>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Item </Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            <Text className="text-base">Search Here</Text>
          </List.Item>
          <List.Item>
            <View className="flex-row justify-between my-1">
              <View className="flex-[1]">
                <Text className="text-base">Request Quantity</Text>
                <InputItem
                  type="number"
                  value={quantity}
                  onChange={(value: string) => setQuantity(value)}
                  placeholder={"Enter Number"}
                />
              </View>
              <View className="flex-[1]">
                <Text className="text-base">Rate</Text>
                <InputItem
                  type="number"
                  value={rate}
                  onChange={(value: string) => setRate(value)}
                  placeholder="100.00"
                />
              </View>
            </View>
          </List.Item>
          <List.Item>
            <Text className="text-base font-bold my-1">Current Stock:</Text>
            <View className="flex-row justify-between my-1">
              <Text className="text-base font-bold text-blue-500">
                Clear Item
              </Text>
              <Button type="primary" style={{ borderRadius: 25, height: 30 }}>
                <Text style={{ color: "white", paddingHorizontal: 15 }}>
                  Add Item to List
                </Text>
              </Button>
            </View>
          </List.Item>
          <List.Item>
            <InputItem
              value={remarks}
              onChange={(value: string) => setRemarks(value)}
              placeholder={"Remarks"}
            />
          </List.Item>
        </List>
        <Text className="p-2 text-base font-bold text-blue-500">
          Total Amount :0.00
        </Text>
        <View className="flex-col justify-center items-center mb-24">
          <Button type="primary" style={{ borderRadius: 25 }}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default StockReceive;
