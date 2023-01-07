import React from "react";
import { List, Card, Carousel } from "@ant-design/react-native";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { NavBar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";

const SalesScreens = () => {
  const SALES_LIST = [
    "Extra Work Entry",
    "Unit Cancellation",
    "Cheque Entry/Update",
  ];
  const NUMBER_LIST = [1, 2, 3, 4];

  return (
    <View>
      <View>
        <NavBar />
        <PageHeader text="Sales" />
      </View>

      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-neutral-400 text-base font-normal">
                Important Updates
              </Text>
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
              {NUMBER_LIST.map((item, index) => (
                <View
                  key={index}
                  className="h-full grow items-center justify-center bg-sky-200"
                >
                  <Text className="text-2xl text-white font-bold">{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {SALES_LIST.map((item, index) => (
            <List.Item
              key={index}
              thumb={<Octicons name="list-unordered" size={20} />}
              arrow="horizontal"
            >
              <Text className="text-lg text-zinc-800 font-normal pl-5 border-neutral-400">
                {item}
              </Text>
            </List.Item>
          ))}
        </List>
      </View>
    </View>
  );
};

export default SalesScreens;
