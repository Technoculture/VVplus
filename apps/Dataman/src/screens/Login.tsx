import React from "react";
import { Flex, WhiteSpace, View, WingBlank } from "@ant-design/react-native";
import { Image } from "react-native";
import LoginForm from "../components/FormComponents/LoginForm";

export const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 5,
      }}
    >
      <View
        style={{
          width: 220,
          position: "relative",
          flex: 1.1,
        }}
      >
        <Flex direction="column">
          <WhiteSpace />
          <WingBlank style={{ position: "absolute", left: 155, top: 20 }}>
            <Flex.Item>
              <Image
                source={require("../../assets/plus.png")}
                style={{ width: 50, height: 60 }}
              />
            </Flex.Item>
          </WingBlank>

          <WingBlank style={{ position: "absolute", top: 70 }}>
            <Flex.Item>
              <Image
                source={require("../../assets/vastuvihar.png")}
                style={{ width: 200, height: 110 }}
              />
            </Flex.Item>
          </WingBlank>
        </Flex>
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          // backgroundColor: "pink",
          height: 50,
          width: 300,
          marginTop: 10,
        }}
      >
        <LoginForm />
      </View>
    </View>
  );
};
