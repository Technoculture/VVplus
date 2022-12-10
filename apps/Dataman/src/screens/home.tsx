import { Button, Card, View } from "@ant-design/react-native";
import * as React from "react";
import { Image, StyleSheet, Text } from "react-native";
export const HomeScreen = () => {
  return (
    <View
      style={{ height: "100%", flexDirection: "column", alignItems: "center" }}
    >
      <View
        style={{
          width: "80%",
          maxHeight: "30%",
        }}
      >
        <Image
          source={require("../../assets/VVplus_Logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
          resizeMethod="scale"
        />
      </View>
      <View
        style={{
          flexGrow: 2,
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: 20,
        }}
      >
        <Card>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>
              Notification
            </Text>
            <Text style={{ paddingHorizontal: 15, textAlign: "center" }}>
              Please check your latest house progress updated by Eng. Devanand
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "500", color: "#00B578" }}>
              Verify Construction Status
            </Text>
          </View>
        </Card>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 2,
            marginVertical: 25,
            width: "100%",
          }}
        >
          <Button type="primary" style={styles.button}>
            Progress
          </Button>
          <Button type="primary" style={styles.button}>
            Customer Care
          </Button>
          <Button type="primary" style={styles.button}>
            Edit Profile
          </Button>
          <Button type="primary" style={styles.button}>
            View House
          </Button>
          <Button type="primary" style={styles.button}>
            Maintenance
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00B578",
    borderRadius: 100,
    paddingVertical: 5,
  },
});
