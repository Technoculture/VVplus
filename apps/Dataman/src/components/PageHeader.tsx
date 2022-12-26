import React from "react";
import { List, Text } from "@ant-design/react-native";

export interface TextProps {
  text: string;
}

export const PageHeader = ({ text }: TextProps) => {
  return (
    <>
      <List.Item>
        <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
          {text}
        </Text>
      </List.Item>
    </>
  );
};
