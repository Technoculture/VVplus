import React from "react";
import { List, Card, Carousel } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";

const Purchase = ({ navigation }: any) => {
  const PURCHASE_LIST = [
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("MaterialRequest");
          }}
        >
          Material Request Entry
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("MaterialApproval");
          }}
        >
          Material Request Approval
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("PlaceOrder");
          }}
        >
          Place Purchase Order
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("Receipt");
          }}
        >
          Good Receipt
        </Text>
      ),
    },
  ];
  const NUMBER_LIST = [1, 2, 3, 4];

  return (
    <View>
      <View>
        <PageHeader text="Purchase" />
      </View>

      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-neutral-400 font-normal text-sm">
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
              {NUMBER_LIST.map((item, index) => (
                <View
                  key={index}
                  className="h-full grow items-center justify-center bg-sky-200"
                >
                  <Text className="text-white font-bold text-3xl">{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {PURCHASE_LIST.map((purchaseItem, index) => (
            <List.Item
              key={index}
              arrow="horizontal"
              thumb={<Octicons name="list-unordered" size={20} />}
            >
              <Text className="font-semibold text-lg pl-5 border-neutral-400">
                {purchaseItem.title}
              </Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
export default Purchase;
