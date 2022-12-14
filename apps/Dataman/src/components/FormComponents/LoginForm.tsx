import React, { useState } from "react";
import { Text, Flex, Button, WhiteSpace, View } from "@ant-design/react-native";
import { Image, StyleSheet } from "react-native";
import Header from "./Header";
import { InputField } from "./InputField";

const LoginForm = () => {
  const [Issignin, setIsSignIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const onChange = (value: any) => setOtp(value);
  const onChangePhoneNumber = (value: any) => setPhoneNumber(value);

  return (
    <View>
      <View style={styles.header}>
        <Header />
      </View>

      <View>
        <Image
          source={require("../../../assets/image.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>

      <View style={styles.form}>
        <Flex direction="column" align="start" style={styles.formField}>
          <Flex.Item>
            <Text style={styles.text_input}>Phone Number</Text>
          </Flex.Item>

          <Flex.Item style={styles.inputField}>
            <InputField
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              maxLength={10}
              placeholder={"+91"}
            />
          </Flex.Item>
        </Flex>
      </View>

      {Issignin ? (
        <View style={styles.form}>
          <Flex direction="column" align="start" style={styles.formField}>
            <Flex.Item>
              <Text style={styles.text_input}>OTP</Text>
            </Flex.Item>

            <Flex.Item style={styles.inputField}>
              <InputField
                value={otp}
                onChange={onChange}
                maxLength={6}
                placeholder={"6 Digit OTP"}
              />
            </Flex.Item>
          </Flex>
        </View>
      ) : null}

      <View style={styles.button}>
        <WhiteSpace size="xs" />
        <Button
          type="primary"
          style={styles.button_text}
          onPress={() => {
            setIsSignIn(true);
            setPhoneNumber("");
          }}
        >
          {Issignin ? "SignIn" : "Send OTP"}
        </Button>
        <WhiteSpace size="sm" />
        {Issignin ? (
          ""
        ) : (
          <Button type="ghost" style={styles.button_text}>
            Register
          </Button>
        )}
        <WhiteSpace />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingLeft: 12,
    paddingVertical: 40,
    color: "#333333",
  },
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
  button_text: {
    width: "100%",
    borderRadius: 20,
  },
});
