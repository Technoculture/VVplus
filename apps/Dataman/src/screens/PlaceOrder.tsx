import React from "react";
import { List, Button } from "@ant-design/react-native";
import { ScrollView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { InputField } from "../components/InputField";
import { NavBar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { VOUCHER_LIST } from "../components/listComponents/MaterialRequestList";
import { PLACE_ORDER_LIST } from "../components/listComponents/PlaceOrderList";

const PlaceOrder = () => {
  const Item = List.Item;

  return (
    <View className="h-full">
      <NavBar />
      <PageHeader text="Place Purchase Order" />
      <ScrollView>
        <List>
          {VOUCHER_LIST.map((item, index) => (
            <Item arrow="horizontal" key={index}>
              <Item.Brief>
                <Text className="text-zinc-800 text-base font-normal">
                  {item.title}
                </Text>
                <AntDesign name="questioncircleo" />
              </Item.Brief>
              <Text className="text-zinc-800 text-lg font-normal">
                {item.content}
              </Text>
            </Item>
          ))}
        </List>
        <List>
          {PLACE_ORDER_LIST.map((item, index) => (
            <List.Item key={index} arrow="horizontal">
              <Text className="text-zinc-800 text-base font-normal">
                {item.title}
              </Text>
              <Text className="text-zinc-800 text-lg font-normal">
                {item.content}
              </Text>
            </List.Item>
          ))}
        </List>
        <View>
          <Text className="text-center text-neutral-400 text-base">Stock</Text>
        </View>

        <List>
          <Item arrow="horizontal">
            <Item.Brief>
              <Text className="text-zinc-800 text-base font-normal">Item</Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Search Here
            </Text>
          </Item>
          <Item>
            <View className="flex flex-row justify-between">
              <View className="w-3/5">
                <Text>Request Quantity</Text>
                <InputField placeholder={"Enter Number"} />
              </View>
              <View className="w-3/5">
                <Text>Unit</Text>
                <InputField placeholder={"Tonnes"} />
              </View>
            </View>
          </Item>

          <Item>
            <Text className="text-base font-bold text-zinc-800">
              Current Stock:
            </Text>
            <View className="flex flex-row justify-between">
              <Text className=" text-blue-600 text-base font-bold ">
                Clear Item
              </Text>
              <Button
                type="primary"
                style={{ width: 170, height: 30, borderRadius: 25 }}
              >
                Add Item to List
              </Button>
            </View>
          </Item>

          <Item arrow="horizontal">
            <Item.Brief>
              <Text className="text-zinc-800 text-base font-normal">
                Request Date
              </Text>
              <AntDesign name="questioncircleo" />
            </Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Enter Date
            </Text>
          </Item>
        </List>
        <View>
          <FormButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaceOrder;
