import React from "react";
import { WingBlank, Text, WhiteSpace, View } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import OtpField from "./OtpField";
import PhoneNumberField from "./PhoneNumberField";
import SignInButton from "./SignInButton";

const LoginForm = () => {
  return (
    <View style={styles.loginDetails}>
      <WingBlank>
        <Text style={styles.LoginText}>Login</Text>
        <WhiteSpace />
        <Text style={styles.dreamHouse}>Let us explore your dream house</Text>
      </WingBlank>

      <WingBlank style={styles.phoneNumberField}>
        <PhoneNumberField />
      </WingBlank>

      <WingBlank>
        <Text style={styles.smsText}>
          You will receive an SMS verification that may apply message and data
          rates.
        </Text>
      </WingBlank>

      <WingBlank>
        <Text style={styles.OtpText}>Send OTP</Text>
      </WingBlank>

      <WingBlank style={styles.OtpField}>
        <OtpField />
      </WingBlank>

      <WingBlank>
        <SignInButton />
      </WingBlank>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginDetails: {
    justifyContent: "space-between",
    flex: 2,
    marginVertical: 25,
  },
  LoginText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  dreamHouse: {
    fontSize: 18,
  },
  phoneNumberField: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 3,
  },
  smsText: {
    fontWeight: "bold",
    fontSize: 11,
  },
  OtpText: {
    textAlign: "center",
    fontSize: 18,
  },
  OtpField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    padding: 3,
  },
});
