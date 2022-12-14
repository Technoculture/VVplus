import React from "react";
import { View, InputItem } from "@ant-design/react-native";

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: any;
};

export const InputField = ({
  value,
  onChange,
  maxLength,
  placeholder,
}: InputProps) => {
  return (
    <View>
      <InputItem
        type="number"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
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
