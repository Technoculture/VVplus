import React from "react";
import { View, Text, List, InputItem } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { InputField } from "../components/InputField";

const UnitCancellation = () => {
  const UNIT_LIST = [
    {
      title: "Cancellation Date",
      content: "Enter Date",
    },
    {
      title: "Booking ID",
      content: "Search Here",
    },
    {
      title: "Change Applicable",
      content: "Search Here",
    },
    {
      title: "Due Date",
      content: "Enter Date",
    },
  ];
  return (
    <View>
      <View>
        <Navbar />
        <PageHeader text="Unit Cancellation" />
      </View>

      <List>
        {UNIT_LIST.map((item, index) => (
          <List.Item key={index} arrow="horizontal">
            <Text style={styles.list_text}>{item.title}</Text>
            <Text style={styles.text}>{item.content}</Text>
          </List.Item>
        ))}
      </List>

      <List>
        <List.Item style={{ height: 60 }}>
          <Text>Base Amount (Deduction Amount)</Text>
          <InputItem style={{ height: 20 }}></InputItem>
        </List.Item>

        <List.Item arrow="horizontal">
          <Text>Tax</Text>
          <Text>Search Here</Text>
        </List.Item>
        <List.Item>
          <Text>Tax</Text>
          <InputField />
        </List.Item>
        <List.Item>
          <Text>Remarks</Text>
          <InputField />
        </List.Item>
      </List>
      <FormButton />
    </View>
  );
};
export default UnitCancellation;
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
});
