import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Carousel, List, View } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

export const HomeScreen = () => {
  const listMap = [
    "Purchase",
    "Store",
    "Sales",
    "Contractors",
    "Approval Requests",
  ];
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "600", paddingHorizontal: 10 }}>
        Home
      </Text>
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
              {[1, 2, 3, 4, 5].map((item, idx) => (
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
              extra={<AntDesign name="right" size={20} color="#969696" />}
            >
              {item}
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};

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
