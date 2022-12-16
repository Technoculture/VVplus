import React from "react";
import { View, Text } from "@ant-design/react-native";

export const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "red",
        // height: 95,
        // width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 12,
        }}
      >
        <Text style={{ fontSize: 15, color: "#333333", paddingLeft: 10 }}>
          Back
        </Text>
      </View>
    </View>
  );
};
