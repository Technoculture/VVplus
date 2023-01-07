import React from "react";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

export const NavBar = () => {
  return (
    <List>
      <List.Item
        thumb={<AntDesign name="left" size={20} />}
        extra={<AntDesign name="ellipsis1" size={20} />}
      >
        Back
      </List.Item>
    </List>
  );
};

