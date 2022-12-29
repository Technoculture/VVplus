import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";

export const StoreScreen = () => {
  const storeOptionsArray = [
    "Stock Recieve Entry",
    "Stock Issue Entry",
    "Phase to Phase Transfer",
    "Branch to Branch Send",
    "Branch to Branch Receive",
  ];
  const carouselOptionArray = [1, 2, 3, 4, 5];
  return (
    <View className="flex-col">
      <Text className="text-3xl font-semibold py-1 px-2">Store</Text>
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
            >
              {item}
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
