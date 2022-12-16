import React from "react";
import { View, Text, List, InputItem, Button } from "@ant-design/react-native";

const MaterialPage = () => {
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
        <Item extra=">">
          <Text>Voucher Type</Text>
          <Text>Search Here</Text>
        </Item>
        <Item extra=">">
          <Text>Endenter Name</Text>
          <Text>Search Here</Text>
        </Item>
        <Item extra=">">
          <Text>Department Name</Text>
          <Text>Search Here</Text>
        </Item>
        <Item extra=">">
          <Text>Choose Phase(Cost Center)</Text>
          <Text>Search Here</Text>
        </Item>
        <Item>
          <Text style={{ textAlign: "center" }}> Stock</Text>
        </Item>
        <Item>
          <Text>Item</Text>
          <Text>Search Here</Text>
        </Item>

        <Item
          style={{
            flexDirection: "row",
            width: "100%",
            height: 70,
            padding: 5,
          }}
        >
          <Item
            style={{
              alignItems: "flex-start",
              width: "50%",
              height: 70,
            }}
          >
            <Text style={{ width: 150 }}>Request Quantity</Text>
            <InputItem
              type="text"
              placeholder="Enter Number"
              style={{
                height: 30,
                padding: 5,
              }}
            ></InputItem>
          </Item>
          {/* <Item
            style={{
              backgroundColor: "gray",
              justifyContent: "flex-end",
              width: "50%",
              height: 100,
              // alignItems: "flex-end",
            }}
          >
            <Text style={{ width: 150 }}>Unit</Text>
            <InputItem
              type="text"
              placeholder="Tonnes"
              style={{ backgroundColor: "pink" }}
            ></InputItem>
          </Item> */}
        </Item>

        <Item>
          <Text>Current Stock:</Text>
          {/* <Item extra="rf">Clear Item</Item> */}
          <Text>Clear Item</Text>
        </Item>
        <Item>
          <Text>Request Date</Text>
          <Text>Enter Date</Text>
        </Item>
      </List>
      <View style={{ alignItems: "center", marginVertical: 5 }}>
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

export default MaterialPage;
