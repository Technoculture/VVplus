import React from "react";
import { View, Text, List, Button } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WorkEntry = () => {
  const ENTRY_LIST = [
    {
      title: "Voucher Type",
      content: "Search Here",
    },
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

  const AMOUNT_LIST = ["Base Amount", "Tax", "Net Amount", "Remarks"];
  return (
    <View>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text style={{ fontSize: 15, color: "#333333" }}>Back</Text>
        </List.Item>
        <List.Item>
          <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
            Extra Work Entry
          </Text>
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
        {AMOUNT_LIST.map((item, index) => (
          <List.Item key={index}>
            <Text style={styles.list_text}>{item}</Text>
          </List.Item>
        ))}
      </List>
      <View style={styles.button}>
        <Button
          type="primary"
          style={{ width: "30%", height: 40, borderRadius: 48 }}
        >
          Submit
        </Button>
      </View>
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
  button: {
    alignItems: "center",
    marginVertical: 10,
  },
});
