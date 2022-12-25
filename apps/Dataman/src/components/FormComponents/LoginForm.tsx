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
      <View>
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
        <View>
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

const styles = StyleSheet.create({
  text_input: {
    color: "#333333",
    fontSize: 15,
  },

  formField: {
    padding: 10,
    height: 80,
  },
  inputField: {
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 40,
    padding: 10,
  },
});
