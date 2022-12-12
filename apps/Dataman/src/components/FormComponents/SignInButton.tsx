import React from "react";
import { Button } from "@ant-design/react-native";

const SignInButton = () => {
  return (
    <Button
      style={{
        backgroundColor: "#4AB04D",
        borderRadius: 50,
        borderColor: "#4AB04D",
        height: 57,
      }}
      type="primary"
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
