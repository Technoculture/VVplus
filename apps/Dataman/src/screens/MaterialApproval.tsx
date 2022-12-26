import React from "react";
import { View, Text, Button, WhiteSpace, List } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { InputField } from "../components/InputField";

const MaterialApproval = () => {
  const Item = List.Item;

  return (
    <View>
      <Navbar />
      <PageHeader text="Material Request Approval" />
      <List>
        <Item arrow="horizontal">
          <Item.Brief>
            <Text style={styles.list_text}>Indent Date</Text>
            <AntDesign name="questioncircleo" color="black" />
          </Item.Brief>
          <Text style={styles.text}>Enter Date</Text>
        </Item>

        <Item>
          <Text style={styles.list_text}>Indent Number</Text>
          <InputField placeholder="Enter Number" />
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
  list_text: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "400",
  },
  text: {
    color: "#333333",
    fontSize: 17,
    fontWeight: "400",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 25,
  },
  button: {
    width: "30%",
    height: 40,
    borderRadius: 48,
  },
});
