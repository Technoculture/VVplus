import React from "react";
import { View, Text, List, Card, Carousel } from "@ant-design/react-native";
import { Octicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";

const Purchase = () => {
  const list = [
    "Material Request Entry",
    "Material Request Approval",
    "Place Purchase Order",
    "Good Receipt",
  ];
  return (
    <View>
      <View>
        <Navbar />
        <PageHeader text="Purchase" />
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
              dotActiveStyle={{
                backgroundColor: "#1677FF",
                width: 23,
                height: 7,
              }}
              style={{ height: 200, marginHorizontal: 10 }}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <View key={index} style={styles.listContainer}>
                  <Text
                    style={{
                      fontSize: 32,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {list.map((purchaseItem, index) => (
            <List.Item
              key={index}
              arrow="horizontal"
              thumb={<Octicons name="list-unordered" size={20} />}
            >
              <Text style={styles.listItem}>{purchaseItem}</Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
export default Purchase;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#969696",
    fontSize: 17,
    fontWight: "700",
    paddingLeft: 5,
  },
  listContainer: {
    height: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ACE0FF",
  },
});
