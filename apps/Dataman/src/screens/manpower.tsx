import { ScrollView, View, Text } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { Button, List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

const DailyManpower = () => {
  const stockFormOptions = [
    {
      label: "Date",
      placeholder: "Enter Date",
    },
    {
      label: "Party Name",
      placeholder: "Search Here",
    },
    {
      label: "Phase(Cost Name)",
      placeholder: "Search Here",
    },
    {
      label: "Resource Type",
      placeholder: "Search Here",
    },
    {
      label: "Quantity",
    },
    { label: "Remarks" },
  ];
  return (
    <View>
      <NavBar />
      <ScrollView>
        <List>
          <List.Item>
            <Text className="text-3xl font-semibold py-1 px-2">
              Stock Issue Entry
            </Text>
          </List.Item>
          {stockFormOptions.map(
            (
              item: { label: string; placeholder?: string; icon?: string },
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
        <View className="flex-col justify-center items-center mb-24 mt-4">
          <Button type="primary" style={{ borderRadius: 25 }}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default DailyManpower;
