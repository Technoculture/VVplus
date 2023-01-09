import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";

export const ContractorApprovalScreen = ({ navigation }: any) => {
  const NUMBER_LIST = [1, 2, 3, 4];

  const Approval_Screen = [
    {
      title: (
        <Text onPress={() => navigation.navigate("DailyManPowerScreen")}>
          Daily Manpower
        </Text>
      ),
    },
  ];
  return (
    <View>
      <View>
        <PageHeader text="Approval Requests" />
      </View>
      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-neutral-400 text-base">
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
              {NUMBER_LIST.map((item, idx) => (
                <View
                  key={idx}
                  className="flex grow items-center justify-center bg-sky-200 h-full"
                >
                  <Text className="text-xl text-white">{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {Approval_Screen.map((item, idx) => (
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

export default ContractorApprovalScreen;
