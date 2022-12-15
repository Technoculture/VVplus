import React from "react";
import { Button } from "@ant-design/react-native";

export interface ButtonProps {
  onPress?: () => void;
  text: React.ReactNode;
  PropsType?: "primary" | "ghost";
}

export const FormButton = ({ onPress, text, PropsType }: ButtonProps) => {
  return (
    <Button
      style={{ width: "100%", borderRadius: 20 }}
      type={PropsType}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};
export default FormButton;
