import React, { useState } from "react";
import { WhiteSpace } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { InputField } from "./InputField";
import FormButton from "./Button";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isEnteredPhoneNumber, setEnteredPhoneNumber] = useState(false);

  return (
    <View>
      <View className="flex flex-col items-start h-50 w-full p-2">
        <Text className="text-zinc-800 text-base pl-4">Phone Number</Text>
        <View className="w-full">
          <InputField
            value={phoneNumber}
            onChange={(value: any) => setPhoneNumber(value)}
            maxLength={10}
            placeholder={"+91"}
          />
        </View>
      </View>

      {isEnteredPhoneNumber ? (
        <View className="flex flex-col items-start h-50 w-full p-2">
          <Text className="text-zinc-800 text-base pl-4">OTP</Text>
          <View className="w-full">
            <InputField
              value={otp}
              onChange={(value: any) => setOtp(value)}
              maxLength={6}
              placeholder={"6 Digit OTP"}
            />
          </View>
        </View>
      ) : null}

      <View className="flex flex-col items-center justify-center p-4 mt-8">
        <WhiteSpace size="xs" />
        <FormButton
          text={`${isEnteredPhoneNumber ? "SignIn" : "Send OTP"}`}
          PropsType={"primary"}
          onPress={() => {
            if (phoneNumber !== "") {
              setEnteredPhoneNumber(true);
              setPhoneNumber("");
            } else if (isEnteredPhoneNumber ? "SignIn" : "") {
              setEnteredPhoneNumber(true);
            } else {
              setEnteredPhoneNumber(false);
            }
          }}
        />

        <WhiteSpace size="lg" />
        {isEnteredPhoneNumber ? null : (
          <FormButton text={"Register"} PropsType={"ghost"} />
        )}
        <WhiteSpace />
      </View>
    </View>
  );
};

export default LoginForm;
