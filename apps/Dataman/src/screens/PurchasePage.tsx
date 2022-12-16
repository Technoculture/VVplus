import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  WhiteSpace,
  List,
  InputItem,
} from "@ant-design/react-native";

const PurchasePage = () => {
  const [number, setNumber] = useState("");
  const Item = List.Item;

  return (
    <View>
      <List>
        <Item extra="...">Back</Item>
        <Item>
          <Text style={{ fontSize: 24, color: "#333333", fontWeight: "700" }}>
            Material Request Approval
          </Text>
        </Item>
        <Item style={{ height: 70, padding: 5 }} extra=">">
          <Text>Indent Date</Text>
          <Text>Enter Date</Text>
        </Item>
        <Item>
          <Text style={{ color: "#333333" }}>Indent Number</Text>
          <InputItem
            type="text"
            placeholder="Enter Number"
            onChange={(value: any) => setNumber(value)}
            value={number}
          />
        </Item>
      </List>

      {/* <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          height: 50,
          width: "90%",
          //   backgroundColor: "red",
          padding: 12,
        }}
      >
        <Text>Indent Date</Text>
        <Text>Enter Date</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          height: 50,
          padding: 12,
          //   backgroundColor: "pink",
        }}
      >
        <Text>Ident Number</Text>
        <Text>Enter Number</Text>
      </View> */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 35,
          padding: 10,
        }}
      >
        <Button
          type="primary"
          style={{ padding: 5, width: "30%", height: 49, borderRadius: 48 }}
        >
          Submit
        </Button>
        <WhiteSpace size="lg" />
        <Button
          type="warning"
          style={{ padding: 5, width: "30%", height: 49, borderRadius: 48 }}
        >
          Deny
        </Button>
      </View>
    </View>
  );
};

export default PurchasePage;
