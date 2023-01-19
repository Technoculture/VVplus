import React from "react";
import { Text, ScrollView, View } from "react-native";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { StoreValidations } from "../Utils/StoreValidations";
import { STOCK_ISSUE } from "../components/listComponents/StockLists";

const StockIssue = () => {
  return (
    <View>
      <ScrollView>
        <List>
          <PageHeader text="Stock Issue Entry" />
          {STOCK_ISSUE.map(
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

export default StockIssue;
