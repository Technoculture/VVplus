import React from "react";
import { Flex, WhiteSpace, WingBlank, View } from "@ant-design/react-native";
import { Image, StyleSheet } from "react-native";
import LoginForm from "../components/FormComponents/LoginForm";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Flex direction="column">
          <WhiteSpace />
          <WingBlank style={styles.plusLogo}>
            <Flex.Item>
              <Image
                source={require("../../assets/plus.png")}
                style={{ width: 50, height: 60 }}
              />
            </Flex.Item>
          </WingBlank>

          <WingBlank style={styles.vastuviharImg}>
            <Flex.Item>
              <Image
                source={require("../../assets/vastuvihar.png")}
                style={{ width: 200, height: 110 }}
              />
            </Flex.Item>
          </WingBlank>
        </Flex>
      </View>

      <View style={styles.LoginForm}>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width: 220,
    position: "relative",
    flex: 0.9,
  },
  plusLogo: {
    position: "absolute",
    left: 155,
    top: 20,
  },
  vastuviharImg: {
    position: "absolute",
    top: 70,
  },
  LoginForm: {
    flex: 2,
  },
});
