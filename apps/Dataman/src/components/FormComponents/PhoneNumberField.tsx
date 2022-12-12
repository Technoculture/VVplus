import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumberField = () => {
  const [phonenumber, setphonenumber] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <PhoneInput
      ref={phoneInput}
      value={phonenumber}
      defaultValue={phonenumber}
      defaultCode="IN"
      layout="first"
      onChangeText={(text) => {
        setphonenumber(text);
      }}
      placeholder="Enter Phone Number"
      containerStyle={{
        height: 50,
        borderRadius: 10,
        width: 300,
      }}
    />
  );
};

export default PhoneNumberField;
