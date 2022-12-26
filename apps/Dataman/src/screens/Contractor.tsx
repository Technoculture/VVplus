import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Carousel, List, View } from "@ant-design/react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export const ContractorScreen = () => {
  return (
    <View>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text style={{ fontSize: 15, color: "#333333" }}>Back</Text>
        </List.Item>
        <List.Item>
          <Text style={{ fontSize: 28, color: "#333333", fontWeight: "700" }}>
            Approval Requests
          </Text>
        </List.Item>
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
          <List.Item
            thumb={
              <MaterialCommunityIcons name="format-list-checkbox" size={24} />
            }
            style={styles.container}
            arrow="horizontal"
          >
            <Text style={{ color: "#333333", fontSize: 17, paddingLeft: 5 }}>
              Daily Manpower
            </Text>
          </List.Item>
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
export default ContractorScreen;
