import React, { useState } from "react";
import { InputItem, List } from "@ant-design/react-native";

const OtpField = () => {
  const [Otp, setOtp] = useState("");

  return (
    <InputItem
      type="number"
      value={Otp}
      onChange={(value: any) => {
        setOtp(value);
      }}
      placeholder="Enter OTP"
      style={{
        fontWeight: "bold",
      }}
    ></InputItem>
  );
};

export default OtpField;
