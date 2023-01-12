import React, { useState } from "react";
import { WhiteSpace } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { InputField } from "./InputField";
import FormButton from "./Button";

const LoginForm = () => {
  const [isEnteredPhoneNumber, setEnteredPhoneNumber] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data: any) => {
    if (isEnteredPhoneNumber === false && "Send OTP") {
      setEnteredPhoneNumber(true);
      console.log(data, "send otp");
    }
    if (isEnteredPhoneNumber === true && "Sign In") {
      console.log("navigate to home screen");
    }
  };

  return (
    <View>
      <View className="flex flex-col items-start h-50 w-full p-2">
        <Text className="text-zinc-800 text-base pl-4">Phone Number</Text>
        <View className="w-full">
          <Controller
            control={control}
            rules={{
              required: "phone number is required",
              minLength: {
                value: 10,
                message: "phone number should be minimum 10 characters long",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <View
                  className={`border rounded bg-white ${
                    error ? `border-red-600` : `border-white`
                  }`}
                >
                  <InputField
                    onChangeText={onChange}
                    value={value}
                    maxLength={10}
                    placeholder={"+91"}
                  />
                </View>
                {error && (
                  <Text className="text-red-600 self-stretch text-center">
                    {error.message}
                  </Text>
                )}
              </>
            )}
            name="phoneNumber"
          />
        </View>
      </View>
      {isEnteredPhoneNumber ? (
        <View className="flex flex-col items-start h-50 w-full p-2">
          <Text className="text-zinc-800 text-base pl-4">OTP</Text>
          <View className="w-full">
            <View className="w-full">
              <Controller
                control={control}
                rules={{
                  required: "OTP is required",
                  minLength: {
                    value: 6,
                    message: "OTP should be minimum 6 characters long",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <View
                      className={`border rounded bg-white ${
                        error ? `border-red-600` : `border-white`
                      }`}
                    >
                      <InputField
                        onChangeText={onChange}
                        value={value}
                        maxLength={6}
                        placeholder={"6 Digit OTP"}
                      />
                    </View>
                    {error && (
                      <Text className="text-red-600 self-stretch text-center">
                        {error.message}
                      </Text>
                    )}
                  </>
                )}
                name="otp"
              />
            </View>
          </View>
        </View>
      ) : null}

      <View className="flex flex-col items-center justify-center p-4 mt-8">
        <WhiteSpace size="xs" />
        <FormButton
          text={`${isEnteredPhoneNumber ? "SignIn" : "Send OTP"}`}
          PropsType={"primary"}
          onPress={handleSubmit(onSubmit)}
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
