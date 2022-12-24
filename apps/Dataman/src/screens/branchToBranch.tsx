import { ScrollView, View } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { Button, List, Text } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

const BranchToBranch = () => {
  return (
    <View>
      <NavBar />
      <ScrollView>
        <List>
          <List.Item>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "600",
                paddingVertical: 5,
              }}
            >
              Branch to Branch Send
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
              <Text>Voucher No. Data</Text>
            </List.Item.Brief>
            Enter Date
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>From Cost Center</Text>
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>Godown</List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>To Cost Center</List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>Site to</List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>Indent No.</List.Item.Brief>
            Search Here
          </List.Item>
        </List>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
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

export default BranchToBranch;
