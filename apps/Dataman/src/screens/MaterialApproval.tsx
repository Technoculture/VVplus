import React from "react";
import { View, Text, Button, WhiteSpace, List } from "@ant-design/react-native";
import { NumberInputField } from "../components/NumberInputField";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";

const MaterialApproval = () => {
  const Item = List.Item;

  return (
    <View>
      <List>
        <Item extra={<AntDesign name="ellipsis1" color="black" size={20} />}>
          Back
        </Item>
        <Item>
          <Text style={styles.header}>Material Request Approval</Text>
        </Item>
        <Item style={styles.date} extra=">">
          <Text>Indent Date</Text>
          <Text>Enter Date</Text>
        </Item>
        <Item>
          <Text>Indent Number</Text>
          <NumberInputField />
        </Item>
      </List>

      <View style={styles.buttonContainer}>
        <Button type="primary" style={styles.button}>
          Submit
        </Button>
        <WhiteSpace size="lg" />
        <Button type="warning" style={styles.button}>
          Deny
        </Button>
      </View>
    </View>
  );
};

export default MaterialApproval;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "700",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 35,
  },
  date: {
    height: 80,
  },
  button: {
    width: "30%",
    borderRadius: 48,
  },
});
