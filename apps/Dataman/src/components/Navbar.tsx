import React from "react";
import { List, Text } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

export const Navbar = () => {
  return (
    <>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text style={{ fontSize: 15, color: "#333333" }}>Back</Text>
        </List.Item>
      </List>
    </>
  );
};
