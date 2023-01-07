import React from "react";
import { View, Text, List } from "@ant-design/react-native";
import { ScrollView } from "react-native";
import { NavBar } from "../components/Navbar";
import { InputField } from "../components/InputField";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { RECEIPT_LIST } from "../components/listComponents/ReceiptList";

const Receipt = () => {
  const Item = List.Item;

  return (
    <ScrollView>
      <View className="h-full">
        <NavBar />
        <PageHeader text="Good Receipt Entry" />

        <List>
          {RECEIPT_LIST.map((item, index) => (
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

        <List>
          <Item>
            <Text>Total Bill Value</Text>
            <InputField placeholder={""} />
          </Item>
          <Item>
            <Text>Remarks</Text>
            <InputField placeholder={""} />
          </Item>
        </List>
        <View>
          <FormButton />
        </View>
      </View>
    </ScrollView>
  );
};
export default Receipt;
