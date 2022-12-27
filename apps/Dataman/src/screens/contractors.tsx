import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Carousel, List, View } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export const ContractorScreen = () => {
  const listMap = ["Daily Manpower"];
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Text
        style={{
          fontSize: 28,
          fontWeight: "600",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        Contractors
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
              thumb={
                <MaterialCommunityIcons name="format-list-checkbox" size={24} />
              }
              key={idx}
              style={styles.container}
              arrow="horizontal"
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
