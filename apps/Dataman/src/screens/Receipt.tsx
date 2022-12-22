import React from "react";
import { View, Text, List, Button, InputItem } from "@ant-design/react-native";
import { StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { receipt } from "../components/ReceiptList";
import TabBar from "../components/TabBar";

const Receipt = () => {
  const Item = List.Item;

  return (
    <ScrollView>
      <View>
        <View>
          <List>
            <Item
              thumb={<AntDesign name="left" color="black" size={20} />}
              extra={<AntDesign name="ellipsis1" color="black" size={20} />}
            >
              Back
            </Item>
            <Item>
              <Text
                style={{ fontSize: 24, color: "#333333", fontWeight: "700" }}
              >
                Good Receipt Entry
              </Text>
            </Item>
          </List>
          <List>
            {receipt.map((list, index) => (
              <Item key={index} arrow="horizontal">
                <Text style={styles.list_text}>{list.title}</Text>
                <Text style={styles.text}>{list.content}</Text>
              </Item>
            ))}
          </List>

          <View>
            <TabBar />
          </View>

          <List>
            <Item>
              <Text>Total Bill Value</Text>
            </Item>
            <Item>
              <Text>Remarks</Text>
              <InputItem type="text" />
            </Item>
          </List>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Button
              type="primary"
              style={{ width: "30%", height: 40, borderRadius: 48 }}
            >
              Submit
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Receipt;

const styles = StyleSheet.create({
  list_text: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "400",
  },
  text: {
    color: "#333333",
    fontSize: 17,
    fontWeight: "400",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    width: "50%",
  },
  button: {
    alignItems: "center",
    marginVertical: 10,
  },
});
