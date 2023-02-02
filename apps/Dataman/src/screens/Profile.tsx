import React from "react";
import { View, Text, Image } from "react-native";
import { getColorsByLetter } from "../Utils/colors";

const ProfileScreen = ({ route, navigation }: any) => {
  const { name, phone } = route.params.contactInfo;
  const colors = getColorsByLetter(name[0]);

  console.log(colors);
  return (
    <View className="relative">
      <Image
        source={require("../../assets/profile.png")}
        className="w-40 h-60 mx-auto"
      />
      <View
        className={`absolute top-0 left-0 right-0 bottom-0 opacity-50  flex items-center justify-center`}
        style={{ backgroundColor: colors }}
      />
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
    </View>
  );
};

export default ProfileScreen;
