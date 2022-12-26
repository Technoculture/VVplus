import React from "react";
import { View, Text, List, Button } from "@ant-design/react-native";
import { ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/InputField";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";

const MaterialRequest = () => {
  const Item = List.Item;

  return (
    <View style={{ height: "100%" }}>
      <Navbar />
      <PageHeader text="Material Request Entry" />

      <ScrollView>
        <List>
          <Item arrow="horizontal">
            <Item.Brief>
              <Text style={styles.list_text}>Voucher Type</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text style={styles.text}>Search Here</Text>
          </Item>
        </List>

        <List>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Endenter Name</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Department Name</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Choose Phase(Cost Center)</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>
        </List>
        <View>
          <Text style={{ textAlign: "center", color: "#999999", fontSize: 15 }}>
            Stock
          </Text>
        </View>

        <List>
          <Item arrow="horizontal">
            <Item.Brief>
              <Text style={styles.list_text}>Item</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text style={styles.text}>Search Here</Text>
          </Item>
          <Item>
            <View style={styles.container}>
              <View style={styles.inputBox}>
                <Text>Request Quantity</Text>
                <InputField placeholder={"Enter Number"} />
              </View>
              <View style={styles.inputBox}>
                <Text>Unit</Text>
                <InputField placeholder={"Tonnes"} />
              </View>
            </View>
          </Item>

          <Item>
            <Text
              style={{ fontSize: 17, fontWeight: "700", color: " #333333" }}
            >
              Current Stock:
            </Text>
            <View style={styles.container}>
              <Text
                style={{ color: "#1677FF", fontSize: 17, fontWeight: "700" }}
              >
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

          <Item arrow="horizontal">
            <Item.Brief>
              <Text style={styles.list_text}>Request Date</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text style={styles.text}>Enter Date</Text>
          </Item>
        </List>
        <View>
          <FormButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default MaterialRequest;

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
});
