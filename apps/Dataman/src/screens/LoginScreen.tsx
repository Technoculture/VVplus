import React from "react";
import { Image, View } from "react-native";
import LoginForm from "../components/FormComponents/LoginForm";
import Header from "../components/FormComponents/Header";

export const LoginScreen = () => {
  return (
    <View>
      <View className="flex flex-col h-20 pl-4 justify-center">
        <Header />
      </View>

      <View>
        <Image
          source={require("../../assets/image.png")}
          className="w-full h-50"
        />
      </View>
      <View>
        <LoginForm />
      </View>
    </View>
  );
};
