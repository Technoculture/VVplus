import * as React from "react";
import { View, Text } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { Octicons } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }: any) => {
  const homeOptionsArray = [
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("Purchase");
          }}
        >
          Purchase
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("StoreScreen");
          }}
        >
          Store
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("SalesScreens");
          }}
        >
          Sales
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("ContractorScreen");
          }}
        >
          Contractors
        </Text>
      ),
    },
    {
      title: (
        <Text
          onPress={() => {
            navigation.navigate("ContractorApprovalScreen");
          }}
        >
          Approval Requests
        </Text>
      ),
    },
  ];

  const carouselOptionArray = [1, 2, 3, 4, 5];
  return (
    <View className="flex-col">
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
          {homeOptionsArray.map((item, idx) => (
            <List.Item
              key={idx}
              style={{ borderColor: "#969696" }}
              arrow="horizontal"
              thumb={<Octicons name="list-unordered" size={20} />}
            >
              <Text className="pl-2 text-lg text-zinc-800 font-normal border-neutral-400">
                {item.title}
              </Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};
