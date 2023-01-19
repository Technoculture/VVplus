import React from "react";
import { ScrollView, View, Text } from "react-native";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { StoreValidations } from "../Utils/StoreValidations";
import { STOCK_RECEIVE } from "../components/listComponents/StockLists";

const StockReceive = () => {
  return (
    <View>
      <ScrollView>
        <List style={{ marginBottom: 10 }}>
          <PageHeader text="Stock Receive Entry" />
          {STOCK_RECEIVE.map(
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
