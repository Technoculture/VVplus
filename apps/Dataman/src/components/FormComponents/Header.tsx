import React from "react";
import { Flex, Text } from "@ant-design/react-native";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <Flex direction="column" align="start">
      <Flex.Item>
        <Text style={styles.text_header}>Sign In</Text>
      </Flex.Item>
    </Flex>
  );
};
export default Header;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 28,
    fontWeight: "700",
    height: 39,
    color: "#333333",
  },
});
