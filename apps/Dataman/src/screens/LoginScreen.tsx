import React from "react";
import { View } from "@ant-design/react-native";
import { StyleSheet, Image } from "react-native";
import LoginForm from "../components/FormComponents/LoginForm";
import Header from "../components/FormComponents/Header";

export const LoginScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Header />
      </View>

      <View>
        <Image
          source={require("../../assets/image.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingLeft: 12,
    justifyContent: "center",
  },
});
