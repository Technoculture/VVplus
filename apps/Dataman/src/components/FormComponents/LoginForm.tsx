import React from "react";
import {
  WingBlank,
  Text,
  Button,
  WhiteSpace,
  View,
} from "@ant-design/react-native";

const LoginForm = () => {
  return (
    <View>
      <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Login</Text>

        <WhiteSpace />

        <Text style={{ color: "black", fontSize: 18 }}>
          Let us explore your dream house
        </Text>
      </WingBlank>

      <WhiteSpace size="xl" />

      <WingBlank>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 11 }}>
          You will receive an SMS verification that may apply message and data
          rates.
        </Text>
      </WingBlank>

      <WhiteSpace size="xl" />

      <WingBlank>
        <Text style={{ textAlign: "center", fontSize: 18, color: "black" }}>
          Send OTP
        </Text>
      </WingBlank>

      <WingBlank>
        <Text>Text OTP here</Text>
      </WingBlank>

      <WhiteSpace />

      <WhiteSpace size="xl" />

      <WingBlank
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "#4CAF50FF",
            borderRadius: 50,
            height: 57,
            width: 300,
          }}
        >
          Sign In
        </Button>
      </WingBlank>
    </View>
  );
};

export default LoginForm;
