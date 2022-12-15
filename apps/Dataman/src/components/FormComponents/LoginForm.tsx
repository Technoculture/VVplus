import React, { useState } from "react";
import { Text, Flex, WhiteSpace, View } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { InputField } from "./InputField";
import FormButton from "./Button";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isEnteredPhoneNumber, setEnteredPhoneNumber] = useState(false);

  return (
    <View>
      <View style={styles.form}>
        <Flex direction="column" align="start" style={styles.formField}>
          <Flex.Item>
            <Text style={styles.text_input}>Phone Number</Text>
          </Flex.Item>

          <Flex.Item style={styles.inputField}>
            <InputField
              value={phoneNumber}
              onChange={(value: any) => setPhoneNumber(value)}
              maxLength={10}
              placeholder={"+91"}
            />
          </Flex.Item>
        </Flex>
      </View>

      {isEnteredPhoneNumber ? (
        <View style={styles.form}>
          <Flex direction="column" align="start" style={styles.formField}>
            <Flex.Item>
              <Text style={styles.text_input}>OTP</Text>
            </Flex.Item>

            <Flex.Item style={styles.inputField}>
              <InputField
                value={otp}
                onChange={(value: any) => setOtp(value)}
                maxLength={6}
                placeholder={"6 Digit OTP"}
              />
            </Flex.Item>
          </Flex>
        </View>
      ) : null}

      <View style={styles.button}>
        <WhiteSpace size="xs" />
        <FormButton
          text={`${isEnteredPhoneNumber ? "SignIn" : "Send OTP"}`}
          PropsType={"primary"}
          onPress={() => {
            phoneNumber !== ""
              ? setEnteredPhoneNumber(true)
              : setEnteredPhoneNumber(false);
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

const styles = StyleSheet.create({
  text_input: {
    color: "#333333",
    fontSize: 15,
  },
  form: {
    paddingLeft: 12,
  },
  formField: {
    paddingTop: 12,
    height: 80,
  },
  inputField: {
    width: "100%",
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 40,
    padding: 10,
  },
});
