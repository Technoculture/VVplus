import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { PageHeader } from "../components/PageHeader";
import { MenuItem } from "../components/MenuItems";

export const StoreScreen = ({ navigation }: any) => {
  const storeOptionsArray = [
    "Stock Receive Entry",
    "Stock Issue Entry",
    "Phase To Phase Transfer",
    "Branch To Branch Send",
    "Branch To Branch Receive",
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
          {storeOptionsArray.map((item, index) => (
            <MenuItem
              myKey={index}
              key={index}
              item={item}
              onPress={() => {
                navigation.navigate(storeOptionsArray[index], {
                  item,
                });
              }}
            />
          ))}
        </List>
      </View>
    </View>
  );
};
