import React from "react";
import { View, Text, List, Button } from "@ant-design/react-native";

const Receipt = () => {
  const Item = List.Item;
  return (
    <View>
      <View>
        <List>
          <Item extra="...">Back</Item>
          <Item>
            <Text style={{ fontSize: 24, color: "#333333", fontWeight: "700" }}>
              Good Receipt Entry
            </Text>
          </Item>
          <Item extra=">">
            <Text>Party Bill Date</Text>
            <Text>Enter Date</Text>
          </Item>
          <Item>
            <Text>Party Challan No.</Text>
          </Item>
          <Item extra=">">
            <Text>Voucher Type</Text>
            <Text>Search Here</Text>
          </Item>

          <Item>
            <Text>Date</Text>
            <Text>Enter Date</Text>
          </Item>
          <Item>
            <Text>Party Bill No.</Text>
          </Item>
          <Item>
            <Text>Godown</Text>
            <Text>Search Here</Text>
          </Item>
          <Item>
            <Text>Cost Center</Text>
            <Text>Search Here</Text>
          </Item>
          <Item>
            <Text>Supplier</Text>
            <Text>Search Here</Text>
          </Item>
          <Item>
            <Text>Fill PO</Text>
            <Text>Search Here</Text>
          </Item>
          <Item>
            <Text>Total Bill Value</Text>
          </Item>
          <Item>
            <Text>Remarks</Text>
          </Item>
        </List>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
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
export default Receipt;
