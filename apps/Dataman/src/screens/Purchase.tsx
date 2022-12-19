import React from "react";
import { View, Text, List, Card, Carousel } from "@ant-design/react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import TabBar from "../components/TabBar";

const Purchase = () => {
  const Item = List.Item;
  const list = [
    "Material Request Entry",
    "Material Request Approval",
    "Place Purchase Order",
    "Good Receipt",
  ];
  return (
    <View>
      <List>
        <Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          Back
        </Item>

        <Item>
          <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
            Purchase
          </Text>
        </Item>
      </List>
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
              style={styles.listItem}
              extra={<AntDesign name="right" color="#969696" size={20} />}
            >
              {purchaseItem}
            </List.Item>
          ))}
        </List>

        <View style={{ marginVertical: 125 }}>
          <TabBar />
        </View>
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
  },
  listContainer: {
    height: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ACE0FF",
  },
});
