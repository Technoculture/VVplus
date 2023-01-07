import React from "react";
import { List } from "@ant-design/react-native";
import { ScrollView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavBar } from "../components/Navbar";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ENTRY_LIST } from "../components/listComponents/EntryList";

const WorkEntry = () => {
  return (
    <View className="h-full">
      <NavBar />
      <PageHeader text="Extra Work Entry" />
      <ScrollView>
        <List>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text className="text-zinc-800 text-base font-normal">
                Voucher Type
              </Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Search Here
            </Text>
          </List.Item>
        </List>
        <List>
          {ENTRY_LIST.map((item, index) => (
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
              Base Amount
            </Text>
            <InputField />
          </List.Item>

          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">
              Net Amount
            </Text>
            <InputField />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Remarks</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <FormButton />
          </List.Item>
        </List>
      </ScrollView>
    </View>
  );
};

export default WorkEntry;
