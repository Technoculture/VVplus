import React from "react";
import { View, InputItem } from "@ant-design/react-native";

export type InputProps = {
  value: string;
  onChangeText: (value: any) => void;
  maxLength: number;
  placeholder: any;
};

export const InputField = ({
  value,
  onChangeText,
  maxLength,
  placeholder,
}: InputProps) => {
  return (
    <View>
      <InputItem
        type="number"
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={"#CCCCCC"}
        style={{
          width: "100%",
          height: 24,
        }}
      />
    </View>
  );
};
