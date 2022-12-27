import { ScrollView, View } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { Button, List, Text } from "@ant-design/react-native";

const DailyManpower = () => {
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
              Daily Manpower
            </Text>
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Date</Text>
            </List.Item.Brief>
            Enter Date
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Party Name</Text>
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text>Phase (Cost Center)</Text>
            </List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item arrow="horizontal">
            <List.Item.Brief>Resource Type</List.Item.Brief>
            Search Here
          </List.Item>
          <List.Item>
            <List.Item.Brief>Quantity</List.Item.Brief>{" "}
          </List.Item>
          <List.Item>
            <List.Item.Brief>Remarks</List.Item.Brief>
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

export default DailyManpower;
