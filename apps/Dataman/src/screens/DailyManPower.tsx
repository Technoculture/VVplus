import React from "react";
import { StyleSheet, Text } from "react-native";
import { InputItem, List, View, Button } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const DailyManPowerScreen = () => {
  const [value, setValue] = useState();
  const DAILY_MANPOWER_LIST = [
    {
      title: "Date",
      content: "Enter Date",
    },
    {
      title: "Party Name",
      content: "Search Here",
    },
    {
      title: "Phase(Cost Center)",
      content: "Search Here",
    },
    {
      title: "Resource Type",
      content: "Search Here",
    },
  ];
  return (
    <View>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text style={styles.item}>Back</Text>
        </List.Item>
        <List.Item>
          <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
            Daily Manpower
          </Text>
        </List.Item>
      </List>

      <List>
        {DAILY_MANPOWER_LIST.map((item, idx) => (
          <List.Item key={idx} arrow="horizontal">
            <Text style={styles.listItem}>{item.title}</Text>
            <Text style={styles.item}>{item.content}</Text>
          </List.Item>
        ))}
      </List>
      <List>
        <List.Item>
          <Text>Quantity</Text>
          <InputItem
            type="number"
            value={value}
            onChange={(value: any) => {
              setValue(value);
            }}
          />
        </List.Item>
        <List.Item>
          <Text>Remarks</Text>
          <InputItem
            value={value}
            onChange={(value: any) => {
              setValue(value);
            }}
          />
        </List.Item>
      </List>

      <View style={styles.button}>
        <Button
          style={{ width: "30%", height: 40, borderRadius: 48 }}
          type="primary"
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    color: "#333333",
    fontSize: 17,
    fontWight: "700",
  },
  item: {
    color: "#333333",
    fontSize: 15,
    fontWight: "700",
  },
  button: {
    marginVertical: 50,
    padding: 10,
    alignItems: "center",
  },
});

export default DailyManPowerScreen;
