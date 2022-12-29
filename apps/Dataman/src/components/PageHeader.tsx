import React from "react";
import { List } from "@ant-design/react-native";
import { Text } from "react-native";

export interface TextProps {
  text: string;
}

export const PageHeader = ({ text }: TextProps) => {
  return (
    <>
      <List.Item>
        <Text className="text-2xl text-zinc-800 font-bold">{text}</Text>
      </List.Item>
    </>
  );
};
