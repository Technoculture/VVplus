import React from "react";
import { Button } from "@ant-design/react-native";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  // ... your custom props here
}

const FormButton: React.FunctionComponent<ButtonProps> = ({
  children,
}: ButtonProps) => {
  return <Button>{children}</Button>;
};
export default FormButton;
