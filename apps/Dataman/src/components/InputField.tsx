import React from "react";
import { View, InputItem } from "@ant-design/react-native";

export type inputFieldProps = {
  value: string;
  placeholder: any;
  onChangeText: (value: any) => void;
  maxLength: number;
};
export const InputField = ({
  placeholder,
  onChangeText,
  value,
  maxLength,
}: inputFieldProps) => {
  return (
    <View>
      <InputItem
        type="number"
        value={value}
        maxLength={maxLength}
        onChange={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};
