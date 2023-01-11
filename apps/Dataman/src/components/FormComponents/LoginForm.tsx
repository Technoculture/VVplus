import React, { useState } from "react";
import { WhiteSpace } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { InputField } from "./InputField";
import FormButton from "./Button";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isEnteredPhoneNumber, setEnteredPhoneNumber] = useState(false);
  const [error, setError] = useState({ phoneNumber: false, otp: false });

  const handleChange = (value: string) => {
    setPhoneNumber(value);

    setError({ phoneNumber: false, otp: false });
  };

  const chk = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/;

  return (
    <View>
      <View className="flex flex-col items-start h-50 w-full p-2">
        <Text className="text-zinc-800 text-base pl-4">Phone Number</Text>
        <View className="w-full">
          <InputField
            value={phoneNumber}
            onChange={handleChange}
            maxLength={10}
            placeholder={"+91"}
          />
          {error.phoneNumber ? (
            <Text className="text-red-600 text-center">
              Please enter valid Phone Number
            </Text>
          ) : null}
        </View>
      </View>

      {isEnteredPhoneNumber ? (
        <View className="flex flex-col items-start h-50 w-full p-2">
          <Text className="text-zinc-800 text-base pl-4">OTP</Text>
          <View className="w-full">
            <InputField
              value={otp}
              onChange={(value: any) => {
                setOtp(value);
                setError({ phoneNumber: false, otp: false });
              }}
              maxLength={6}
              placeholder={"6 Digit OTP"}
            />
            {error.otp ? (
              <Text className="text-red-600 text-center">
                Please enter valid otp
              </Text>
            ) : null}
          </View>
        </View>
      ) : null}

      <View className="flex flex-col items-center justify-center p-4 mt-8">
        <WhiteSpace size="xs" />
        <FormButton
          text={`${isEnteredPhoneNumber ? "SignIn" : "Send OTP"}`}
          PropsType={"primary"}
          onPress={() => {
            if (phoneNumber === "" && otp === "") {
              setError({ phoneNumber: true, otp: true });
              setEnteredPhoneNumber(false);
            } else if (!chk.test(phoneNumber)) {
              setError({ ...error, phoneNumber: true });
            } else {
              setEnteredPhoneNumber(true);
            }

            if (
              isEnteredPhoneNumber
                ? "SignIn"
                : "" && otp === "" && phoneNumber !== " "
            ) {
              setError({ ...error, otp: true });
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
