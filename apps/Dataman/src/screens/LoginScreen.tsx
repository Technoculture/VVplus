import React from "react";
import { Image, View } from "react-native";
import LoginForm from "../components/FormComponents/LoginForm";
import Header from "../components/FormComponents/Header";

export const LoginScreen = ({ navigation }: any) => {
  return (
    <View className="bg-white h-full">
      <View className="flex flex-col h-20 pl-4 justify-center">
        <Header />
      </View>

      <View>
        <Image
          source={require("../../assets/image.png")}
          className="w-full h-50"
          alt=""
        />
      </View>
      <View>
        <LoginForm navigation={navigation} />
      </View>
    </View>
  );
};
