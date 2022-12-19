import React, { useState } from "react";
import { View, InputItem } from "@ant-design/react-native";

export const InputField = () => {
  const [tonnes, setTonnes] = useState("");

  return (
    <View>
      <InputItem
        type="number"
        value={tonnes}
        onChange={(value: any) => {
          setTonnes(value);
        }}
        placeholder="Tonnes"
        style={{
          height: 20,
          width: "10%",
        }}
      />
    </View>
  );
};
