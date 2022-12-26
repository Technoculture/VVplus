import React from "react";
import { View, Text, List } from "@ant-design/react-native";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/InputField";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";

const Receipt = () => {
  const Item = List.Item;
  return (
    <View style={{ height: "100%" }}>
      <Navbar />
      <PageHeader text="Good Receipt Entry" />
      <ScrollView>
        <List>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Party Bill Date</Text>
            <Text style={styles.text}>Enter Date</Text>
          </Item>
          <Item>
            <Text>Party Challan No.</Text>
          </Item>
          <Item arrow="horizontal">
            <Item.Brief>
              <Text style={styles.list_text}>Voucher Type</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text style={styles.text}>Search Here</Text>
          </Item>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Date</Text>
            <Text style={styles.text}>Enter Date</Text>
          </Item>
          <Item>
            <Text>Party Bill No.</Text>
          </Item>

          <Item arrow="horizontal">
            <Text style={styles.list_text}>Go Down</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>
          <Item arrow="horizontal">
            <Text style={styles.list_text}>Cost Center</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>

          <Item arrow="horizontal">
            <Text style={styles.list_text}>Supplier</Text>
            <Text style={styles.text}>Search Here</Text>
          </Item>

          <Item arrow="horizontal">
            <Item.Brief>
              <Text style={styles.list_text}>Fill PO</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text style={styles.text}>Search Here</Text>
          </Item>
        </List>

        <List>
          <Item>
            <Text>Total Bill Value</Text>
            <InputField placeholder={""} />
          </Item>
          <Item>
            <Text>Remarks</Text>
            <InputField placeholder={""} />
          </Item>
        </List>

        <FormButton />
      </ScrollView>
    </View>
  );
};
export default Receipt;

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
