import React from "react";
import { View, Text, List, Button } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { materialList } from "../components/MaterialList";
import { NumberInputField } from "../components/NumberInputField";
import { InputField } from "../components/InputField";
import TabBar from "../components/TabBar";

const Material = () => {
  const Item = List.Item;

  return (
    <View>
      <List>
        <Item extra="...">Back</Item>
        <Item>
          <Text style={{ fontSize: 24, color: "#333333", fontWeight: "700" }}>
            Material Request Entry
          </Text>
        </Item>
      </List>
      <List>
        {materialList.map((list, index) => (
          <Item key={index}>
            <Text style={styles.list_text}>{list.title}</Text>
            <Text style={styles.text}>{list.content}</Text>
          </Item>
        ))}
      </List>
      <View>
        <Text style={{ textAlign: "center", color: "#999999", fontSize: 15 }}>
          Stock
        </Text>
      </View>
      <List>
        <Item>
          <Text style={styles.list_text}>Item</Text>
          <Text style={styles.text}>Search Here</Text>
        </Item>
        <Item>
          <View style={styles.container}>
            <View style={styles.inputBox}>
              <Text>Request Quantity</Text>
              <NumberInputField />
            </View>
            <View style={styles.inputBox}>
              <Text>Unit</Text>
              <InputField />
            </View>
          </View>
        </Item>

        <Item>
          <Text style={{ fontSize: 17, fontWeight: "700", color: " #333333" }}>
            Current Stock:
          </Text>
          <View style={styles.container}>
            <Text style={{ color: "#1677FF", fontSize: 17, fontWeight: "700" }}>
              Clear Item
            </Text>
            <Button
              type="primary"
              style={{ width: 170, height: 30, borderRadius: 25 }}
            >
              Add Item to List
            </Button>
          </View>
        </Item>
        <Item>
          <Text style={styles.list_text}>Request Date</Text>
          <Text style={styles.text}>Enter Date</Text>
        </Item>
      </List>

      <View>
        <TabBar />
        <View style={styles.button}>
          <Button
            type="primary"
            style={{ width: "30%", height: 40, borderRadius: 48 }}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Material;

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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    width: "50%",
  },
  button: {
    alignItems: "center",
    marginVertical: 10,
  },
});
