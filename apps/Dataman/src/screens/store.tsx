import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { Octicons } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";

export const StoreScreen = ({ navigation }: any) => {
  const storeOptionsArray = [
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("StockReceive");
          }}
        >
          Stock Receive Entry
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("StockIssue");
          }}
        >
          Stock Issue Entry
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("PhaseToPhase");
          }}
        >
          Phase To Phase Transfer
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("BranchSend");
          }}
        >
          Branch To Branch Send
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("BranchReceive");
          }}
        >
          Branch To Branch Receive
        </Text>
      ),
    },
  ];
  const carouselOptionArray = [1, 2, 3, 4, 5];
  return (
    <View className="flex-col">
      <View>
        <PageHeader text="Store" />
      </View>
      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-gray-400 text-sm">Important Updates</Text>
            }
          />
          <Card.Body>
            <Carousel
              dotActiveStyle={{ backgroundColor: "#1677FF", width: "5%" }}
              style={{ height: 200, marginHorizontal: 10 }}
            >
              {carouselOptionArray.map((item, idx) => (
                <View
                  key={idx}
                  className="h-full flex-grow items-center justify-center bg-[#ACE0FF]"
                >
                  <Text className="text-2xl text-white">{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {storeOptionsArray.map((item, idx) => (
            <List.Item
              key={idx}
              style={{ borderColor: "#969696" }}
              arrow="horizontal"
              thumb={<Octicons name="list-unordered" size={20} />}
            >
              <Text className="font-semibold text-lg pl-5 border-neutral-400">
                {item.title}
              </Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
