import React from "react";
import { List, View, Text, Card, Carousel } from "@ant-design/react-native";
import { Octicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";

const SalesScreens = () => {
  const SALES_LIST = [
    "Extra Work Entry",
    "Unit Cancellation",
    "Cheque Entry/Update",
  ];

  return (
    <View>
      <View>
        <Navbar />
        <PageHeader text="Sales" />
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
              {[1, 2, 3, 4].map((item, index) => (
                <View key={index} style={styles.listContainer}>
                  <Text
                    style={{ fontSize: 32, color: "white", fontWeight: "700" }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {SALES_LIST.map((item, index) => (
            <List.Item
              key={index}
              thumb={<Octicons name="list-unordered" size={20} />}
              arrow="horizontal"
            >
              <Text style={styles.listItem}>{item}</Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};

export default SalesScreens;

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

  listItem: {
    borderColor: "#969696",
    color: "#333333",
    fontSize: 17,
    fontWight: "700",
    paddingLeft: 7,
  },
});
