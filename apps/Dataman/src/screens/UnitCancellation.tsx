import React from "react";
import { List } from "@ant-design/react-native";
import { View, Text, ScrollView } from "react-native";
import { NavBar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { UNIT_LIST } from "../components/listComponents/UnitList";
import { InputField } from "../components/InputField";

const UnitCancellation = () => {
  return (
    <View className="h-full">
      <View>
        <NavBar />
        <PageHeader text="Unit Cancellation" />
      </View>
      <ScrollView>
        <List>
          {UNIT_LIST.map((item, index) => (
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
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">
              Base Amount (Deduction Amount)
            </Text>
            <InputField />
          </List.Item>

          <List.Item arrow="horizontal">
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
            <Text className="text-zinc-800 text-lg font-normal">
              Search Here
            </Text>
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Remarks</Text>
            <InputField />
          </List.Item>
        </List>
        <FormButton />
      </ScrollView>
    </View>
  );
};
export default UnitCancellation;
