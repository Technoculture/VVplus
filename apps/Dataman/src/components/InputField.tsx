import React, { useState } from "react";
import { View, InputItem } from "@ant-design/react-native";

export const InputField = () => {
  const [value, setValue] = useState("");
  return (
    <View>
      <InputItem
        type="text"
        value={value}
        onChange={(value: any) => {
          setValue(value);
        }}
      />
    </View>
  );
};
// export type InputProps = {
//   placeholder: any;
// };

// export const InputField = ({ placeholder }: InputProps) => {
//   const [number, setNumber] = useState("");
//   return (
//     <View>
//       <InputItem
//         type="number"
//         value={number}
//         onChange={(value: any) => {
//           setNumber(value);
//         }}
//         placeholder={placeholder}
//       />
//     </View>
//   );
// };
