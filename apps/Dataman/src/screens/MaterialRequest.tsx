import React from "react";
import { List } from "@ant-design/react-native";
import { ScrollView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { PurchaseValidations } from "../Utils/PurchaseValidations";
import {
  MATERIAL_REQUEST_LIST,
  VOUCHER_LIST,
} from "../components/listComponents/MaterialRequestList";

const MaterialRequest = () => {
  const Item = List.Item;

  return (
    <View className="h-full">
      <PageHeader text="Material Request Entry" />

      <ScrollView>
        <List>
          {VOUCHER_LIST.map((item, index) => (
            <Item arrow="horizontal" key={index}>
              <Item.Brief>
                <Text className="text-zinc-800 text-base font-normal">
                  {item.title}
                </Text>
                <AntDesign name="questioncircleo" />
              </Item.Brief>
              <Text className="text-zinc-800 text-lg font-normal">
                {item.content}
              </Text>
            </Item>
          ))}
        </List>

        <List>
          {MATERIAL_REQUEST_LIST.map((item, index) => (
            <List.Item key={index} arrow="horizontal">
              <Text className="text-zinc-800 text-base font-normal">
                {item.title}
              </Text>
              <Text className="text-zinc-800 text-lg font-normal">
                {item.content}
              </Text>
            </List.Item>
          ))}
        </List>
        <View>
          <Text className="text-center text-neutral-400 text-base">Stock</Text>
        </View>
        <PurchaseValidations />
      </ScrollView>
    </View>
  );
};

export default MaterialRequest;
