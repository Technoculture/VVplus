import React from "react";
import { List, Card, Carousel } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { PageHeader } from "../components/PageHeader";
import { MenuItem } from "../components/MenuItems";

const Purchase = ({ navigation }: any) => {
  const PURCHASE_LIST = [
    "Material Request Entry",
    "Material Approval",
    "Place Order",
    "Goods Receipt",
  ];
  const NUMBER_LIST = [1, 2, 3, 4];

  return (
    <View>
      <View>
        <PageHeader text="Purchase" />
      </View>

      <View>
        <Card full>
          <Card.Header
            title={
              <Text className="text-neutral-400 font-normal text-sm">
                Important Updates
              </Text>
            }
          />
          <Card.Body>
            <Carousel
              dotActiveStyle={{
                backgroundColor: "#1677FF",
                width: 23,
                height: 7,
              }}
              style={{ height: 200, marginHorizontal: 10 }}
            >
              {NUMBER_LIST.map((item, index) => (
                <View
                  key={index}
                  className="h-full grow items-center justify-center bg-sky-200"
                >
                  <Text className="text-white font-bold text-3xl">{item}</Text>
                </View>
              ))}
            </Carousel>
          </Card.Body>
        </Card>
        <List>
          {PURCHASE_LIST.map((item, index) => (
            <MenuItem
              myKey={index}
              key={index}
              item={item}
              onPress={() => {
                navigation.navigate(PURCHASE_LIST[index], {
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
export default Purchase;
