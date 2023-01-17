import React, { useState } from "react";
import { View, InputItem } from "@ant-design/react-native";

export type inputFieldProps = {
  placeholder: any;
};
export const InputField = ({ placeholder }: inputFieldProps) => {
  const [value, setValue] = useState("");
  return (
    <View>
      <InputItem
        type="text"
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        placeholder={placeholder}
      />
    </View>
  );
};
