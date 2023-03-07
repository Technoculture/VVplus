import React from "react";
import { View, Text } from "react-native";

interface ContactInfoProps {
  contactInfo: { name: string; phone: number; id: number };
}

export const ContactsCard = ({ contactInfo }: ContactInfoProps) => {
  const { name } = contactInfo;

  return (
    <View>
      <View className="flex flex-row items-start justify-start p-4">
        <Text className="text-xl font-bold pl-3">{name}</Text>
      </View>
    </View>
  );
};
