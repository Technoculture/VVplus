import React from "react";
import { Text, ScrollView, View } from "react-native";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { BRANCH_RECEIVE } from "../components/listComponents/BranchLists";
import { FormButton } from "../components/Button";

const BranchReceive = () => {
  return (
    <View>
      <ScrollView>
        <List>
          <PageHeader text="Branch To Branch Receive" />
          {BRANCH_RECEIVE.map(
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
          <FormButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default BranchReceive;
