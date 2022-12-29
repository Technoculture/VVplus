import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export const ContractorScreen = () => {
  const listMap = ["Daily Manpower"];
  const carouselOptionArray = [1, 2, 3, 4, 5];
  return (
    <View className="flex-col">
      <NavBar />
      <Text className="text-3xl font-semibold py-1 px-2">Contractors</Text>
      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-gray-500 text-sm">Important Updates</Text>
            }
          />
          <Card.Body>
            <Carousel
              dotActiveStyle={{ backgroundColor: "#1677FF", width: "5%" }}
              style={{
                height: 200,
                marginHorizontal: 10,
                borderColor: "#969696",
              }}
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
          {listMap.map((item, idx) => (
            <List.Item
              thumb={
                <MaterialCommunityIcons name="format-list-checkbox" size={24} />
              }
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
