import React, { useState } from "react";
import { View, InputItem } from "@ant-design/react-native";

export const NumberInputField = () => {
  const [number, setNumber] = useState("");
  return (
    <View>
      <InputItem
        type="number"
        value={number}
        onChange={(value: any) => {
          setNumber(value);
        }}
        placeholder={"Enter Number"}
        style={{
          height: 30,
        }}
      />
    </View>
  );
};
