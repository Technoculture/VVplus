import React from "react";
import { View, Text } from "react-native";
import { getColorsByLetter } from "../../Utils/colors";

interface ContactInfoProps {
  contactInfo: { name: string; phone: number; id: number };
}

export const ContactsCard = ({ contactInfo }: ContactInfoProps) => {
  const { name } = contactInfo;
  const color = getColorsByLetter(name[0]);

  return (
    <View>
      <View className="flex flex-row items-start justify-start p-4">
        <View
          className={`w-10 h-10 rounded-full flex items-center justify-center`}
          style={{ backgroundColor: color }}
        >
          <Text className="text-white text-xl font-bold">{name[0]}</Text>
        </View>

        <Text className="text-xl font-bold pl-3">{name}</Text>
      </View>
    </View>
  );
};
