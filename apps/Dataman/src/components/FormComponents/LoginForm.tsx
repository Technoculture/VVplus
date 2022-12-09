import React from "react";
import {
  View,
  WingBlank,
  Text,
  Button,
  WhiteSpace,
} from "@ant-design/react-native";

const LoginForm = () => {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Login</Text>

        <WhiteSpace />

        <Text style={{ fontWeight: "400" }}>
          Let us explore your dream house
        </Text>
      </WingBlank>

      <WingBlank style={{ marginBottom: 5, marginTop: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 11 }}>
          You will receive an SMS verification that may apply message and data
          rates.
        </Text>
      </WingBlank>

      <WhiteSpace />

      <WingBlank>
        <Text style={{ textAlign: "center" }}>Send OTP</Text>
      </WingBlank>

      <WingBlank>
        <Text>Text OTP here</Text>
      </WingBlank>
      <WhiteSpace />

      <WhiteSpace size="xl" />
      <WingBlank>
        <Button type="primary">Signin</Button>
      </WingBlank>
    </View>
  );
};

export default LoginForm;
