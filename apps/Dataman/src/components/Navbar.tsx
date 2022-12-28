import React from "react";
import { List } from "@ant-design/react-native";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Navbar = () => {
  return (
    <>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text className="text-base text-zinc-800">Back</Text>
        </List.Item>
      </List>
    </>
  );
};
