import React from "react";
import { List, View, Text, Card, Carousel } from "@ant-design/react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const SalesScreens = () => {
  const Item = List.Item;
  const listMap = [
    "Extra Work Entry",
    "Unit Cancellation",
    "Cheque Entry/Update",
  ];

  return (
    <View>
      <List>
        <Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text style={{ fontSize: 15, color: "#333333" }}>Back</Text>
        </Item>
        <Item>
          <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
            Sales
          </Text>
        </Item>
      </List>
      <View>
        <Card full>
          <Card.Header
            title={
              <Text style={{ color: "#969696", fontSize: 14 }}>
                Important Updates
              </Text>
            }
          />
          <Card.Body>
            <Carousel
              dotActiveStyle={{ backgroundColor: "#1677FF", width: "5%" }}
              style={[{ height: 200, marginHorizontal: 10 }, styles.container]}
            >
              {[1, 2, 3, 4].map((item, idx) => (
                <View key={idx} style={styles.listContainer}>
                  <Text style={{ fontSize: 25, color: "white" }}>{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {listMap.map((item, idx) => (
            <List.Item
              key={idx}
              style={styles.container}
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
    paddingLeft: 5,
  },
});
