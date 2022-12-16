import React from "react";
import { View, Text, List, Card, Carousel } from "@ant-design/react-native";
import { StyleSheet } from "react-native";
import { Navbar } from "./Navbar";

const Purchase = () => {
  const list = [
    "Material Request Entry",
    "Material Request Approval",
    "Place Purchase Order",
    "Good Receipt",
  ];
  return (
    <View>
      <Navbar />

      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          paddingLeft: 12,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
          Purchase
        </Text>
      </View>
      <View>
        <Card full>
          <Card.Header
            title={
              <Text
                style={{ color: "#969696", fontSize: 14, fontWeight: "400" }}
              >
                Important Updates
              </Text>
            }
          />
          <Card.Body>
            <Carousel
              dotActiveStyle={{ backgroundColor: "#1677FF", width: "5%" }}
              style={[{ height: 200, marginHorizontal: 10 }, styles.container]}
            >
              {[1, 2, 3, 4, 5].map((item, index) => (
                <View key={index} style={styles.listContainer}>
                  <Text style={{ fontSize: 25, color: "white" }}>{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {list.map((purchaseItem, index) => (
            <List.Item key={index} style={styles.container}>
              {purchaseItem}
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
export default Purchase;

const styles = StyleSheet.create({
  container: {
    borderColor: "#969696",
  },
  listContainer: {
    height: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ACE0FF",
  },
});
