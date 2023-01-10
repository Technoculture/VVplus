import * as React from "react";
import { Text, View } from "react-native";
import { Card, Carousel, List } from "@ant-design/react-native";
import { MenuItem } from "../components/MenuItems";
import { PageHeader } from "../components/PageHeader";

export const ContractorApprovalScreen = ({ navigation }: any) => {
  const NUMBER_LIST = [1, 2, 3, 4];

  const Approval_Screen = ["Daily Manpowers"];
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
          {Approval_Screen.map((item, index) => (
            <MenuItem
              myKey={index}
              key={index}
              item={item}
              onPress={() => {
                navigation.navigate(Approval_Screen[index], {
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

export default ContractorApprovalScreen;
