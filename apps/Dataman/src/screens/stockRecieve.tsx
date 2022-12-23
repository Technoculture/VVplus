import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Button, InputItem, List, Text } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

const StockReceive = () => {
  const [quantity, setQuantity] = useState<string>();
  const [rate, setRate] = useState<string>();
  const [remarks, setRemarks] = useState<string>();
  return (
    <View>
      <NavBar />
      <ScrollView>
        <List style={{ marginVertical: 10 }}>
          <List.Item>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "600",
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}
            >
              Stock Receive Entry
            </Text>
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Voucher Type </Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Indentor Name</Text>
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Department Name</Text>
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>Choose Phase(Cost Center)</List.Item.Brief>
            Search Here
          </List.Item>
        </List>
        <Text style={{ textAlign: "center", color: "#999999", fontSize: 15 }}>
          Stock
        </Text>
        <List style={{ marginVertical: 10 }}>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Item </Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            <Text>Search Here</Text>
          </List.Item>
          <List.Item>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16 }}>Request Quantity</Text>
                <InputItem
                  type="number"
                  value={quantity}
                  onChange={(value: string) => setQuantity(value)}
                  placeholder={"Enter Number"}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 16 }}>Rate</Text>
                <InputItem
                  type="number"
                  value={rate}
                  onChange={(value: string) => setRate(value)}
                  placeholder="100.00"
                />
              </View>
            </View>
          </List.Item>
          <List.Item>
            <Text
              style={{ fontSize: 17, fontWeight: "700", marginVertical: 5 }}
            >
              Current Stock:
            </Text>
            <View style={styles.container}>
              <Text
                style={{ color: "#1677FF", fontSize: 17, fontWeight: "700" }}
              >
                Clear Item
              </Text>
              <Button type="primary" style={{ borderRadius: 25, height: 30 }}>
                <Text style={{ color: "white", paddingHorizontal: 15 }}>
                  Add Item to List
                </Text>
              </Button>
            </View>
          </List.Item>
          <List.Item>
            <InputItem
              value={remarks}
              onChange={(value: string) => setRemarks(value)}
              placeholder={"Remarks"}
            />
          </List.Item>
        </List>
        <Text
          style={{
            padding: 10,
            color: "#1677FF",
            fontSize: 17,
            fontWeight: "700",
          }}
        >
          Total Amount :0.00
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <Button type="primary" style={{ borderRadius: 25 }}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default StockReceive;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
