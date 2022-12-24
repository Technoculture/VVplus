import React from "react";
import { View, Text, List } from "@ant-design/react-native";
import { ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { PageHeader } from "../components/PageHeader";

const WorkEntry = () => {
  const ENTRY_LIST = [
    {
      title: "Booking ID",
      content: "Search Here",
    },
    {
      title: "Stage(ex: purpose, Extra Work, Extra Land)",
      content: "Search Here",
    },
    {
      title: "OverHead",
      content: "Search Here",
    },
    {
      title: "Date of Estimate",
      content: "Enter Date",
    },
  ];

  return (
    <View style={{ height: "100%" }}>
      <Navbar />
      <PageHeader text="Extra Work Entry" />
      <ScrollView>
        <List>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text style={styles.list_text}>Voucher Type</Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            <Text style={styles.text}>Search Here</Text>
          </List.Item>
        </List>
        <List>
          {ENTRY_LIST.map((item, index) => (
            <List.Item key={index} arrow="horizontal">
              <Text style={styles.list_text}>{item.title}</Text>
              <Text style={styles.text}>{item.content}</Text>
            </List.Item>
          ))}
        </List>

        <List>
          <List.Item>
            <Text>Base Amount</Text>
            <InputField />
          </List.Item>

          <List.Item>
            <Text>Tax</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <Text>Net Amount</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <Text>Remarks</Text>
            <InputField />
          </List.Item>
          <List.Item>
            <FormButton />
          </List.Item>
        </List>
      </ScrollView>
    </View>
  );
};

export default WorkEntry;

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
