import { ScrollView, View, Text } from "react-native";
import React from "react";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { StoreValidations } from "../Utils/StoreValidations";

const StockReceive = () => {
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
      <ScrollView>
        <List style={{ marginBottom: 10 }}>
          <PageHeader text="Stock Receive Entry" />
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
        <StoreValidations />
      </ScrollView>
    </View>
  );
};

export default StockReceive;
