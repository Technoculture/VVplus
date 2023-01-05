import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export const ContractorApprovalScreen = () => {
  const NUMBER_LIST = [1, 2, 3, 4];

  return (
    <View>
      <List>
        <List.Item
          thumb={<AntDesign name="left" color="black" size={20} />}
          extra={<AntDesign name="ellipsis1" color="black" size={20} />}
        >
          <Text className="text-base text-zinc-800">Back</Text>
        </List.Item>
        <List.Item>
          <Text className="text-zinc-800 text-2xl font-bold">
            Approval Requests
          </Text>
        </List.Item>
      </List>

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
          <List.Item
            thumb={
              <MaterialCommunityIcons name="format-list-checkbox" size={24} />
            }
            arrow="horizontal"
          >
            <Text className="text-zinc-800 text-base pl-3">Daily Manpower</Text>
          </List.Item>
        </List>
      </View>
    </View>
  );
};

export default ContractorApprovalScreen;
