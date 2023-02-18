import React from "react";
import { List } from "@ant-design/react-native";
import { Octicons } from "@expo/vector-icons";
import { Text } from "react-native";

export type MenuItemsProps = {
  myKey: number;
  onPress: () => void;
  item: string;
};

export const MenuItem = ({ myKey, onPress, item }: MenuItemsProps) => {
  return (
    <List.Item
      myKey={myKey}
      style={{ borderColor: "#969696" }}
      arrow="horizontal"
      thumb={<Octicons name="list-unordered" size={20} />}
      onPress={onPress}
    >
      <Text className="pl-3 text-lg text-zinc-800 font-normal border-neutral-400">
        {item}
      </Text>
    </List.Item>
  );
};
