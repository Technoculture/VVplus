import React from "react";
import { Button, WhiteSpace, List } from "@ant-design/react-native";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavBar } from "../components/NavBar";
import { PageHeader } from "../components/PageHeader";
import { InputField } from "../components/InputField";

const MaterialApproval = () => {
  const Item = List.Item;

  return (
    <View>
      <NavBar />
      <PageHeader text="Material Request Approval" />
      <List>
        <Item arrow="horizontal">
          <Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Indent Date
            </Text>
            <AntDesign name="questioncircleo" color="black" />
          </Item.Brief>
          <Text className="text-zinc-800 text-lg font-normal">Enter Date</Text>
        </Item>

        <Item>
          <Text className="text-zinc-800 text-base font-normal">
            Indent Number
          </Text>
          <InputField placeholder="Enter Number" />
        </Item>
      </List>

      <View className="flex flex-col items-center justify-center gap-1 mt-10 ">
        <Button type="primary" style={{ borderRadius: 25 }}>
          Submit
        </Button>
        <WhiteSpace size="lg" />
        <Button type="warning" style={{ borderRadius: 25 }}>
          Deny
        </Button>
      </View>
    </View>
  );
};

export default MaterialApproval;
