import React from "react";
import { Flex } from "@ant-design/react-native";
import { Text } from "react-native";

const Header = () => {
  return (
    <Flex direction="column" align="start">
      <Flex.Item>
        <Text className="text-3xl text-black h-10 font-bold text-zinc-800">
          Sign In
        </Text>
      </Flex.Item>
    </Flex>
  );
};
export default Header;
