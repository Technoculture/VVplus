import React from "react";
import { ScrollView, View, Text } from "react-native";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { stockFormOptions } from "../components/listComponents/ManPowerList";

const DailyManpower = () => {
  return (
    <View>
      <ScrollView>
        <List>
          <PageHeader text="Daily Manpower" />
          {stockFormOptions.map(
            (
              item: { label: string; placeholder?: string; icon?: string },
              idx
            ) => (
              <List.Item key={idx} arrow="horizontal">
                <List.Item.Brief>
                  <Text>{item.label}</Text>
                  {item.icon !== undefined ? (
                    <AntDesign name={item.icon} />
                  ) : null}
                </List.Item.Brief>
                {item.placeholder}
              </List.Item>
            )
          )}
        </List>
        <View className="flex-col justify-center items-center mb-24 mt-4">
          <FormButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default DailyManpower;
