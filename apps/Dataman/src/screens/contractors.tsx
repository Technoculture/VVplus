import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";

export const ContractorScreen = ({ navigation }: any) => {
  const listMap = [
    {
      title: (
        <Text onPress={() => navigation.navigate("DailyManpower")}>
          Daily Manpower
        </Text>
      ),
    },
  ];
  const carouselOptionArray = [1, 2, 3, 4, 5];
  return (
    <View className="flex-col">
      <View>
        <PageHeader text="Contractors" />
      </View>
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
              <Text className="text-zinc-800 text-base pl-3">{item.title}</Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
