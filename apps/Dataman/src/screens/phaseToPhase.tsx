import { Text, ScrollView, View } from "react-native";
import React from "react";
import { List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { StoreValidations } from "../Utils/StoreValidations";

const PhasetoPhase = () => {
  const stockFormOptions = [
    {
      label: "Voucher Type",
      placeholder: "Search Here",
      icon: "questioncircleo",
    },
    {
      label: "Date",
      placeholder: "Enter Date",
    },
    {
      label: "Issue To Which Staff",
      placeholder: "Search Here",
    },
    {
      label: "From Which Phase",
      placeholder: "Search Here",
    },
    {
      label: "Location(From)",
      placeholder: "Search Here",
    },
    {
      label: "To Phase",
      placeholder: "Search Here",
    },
    {
      label: "Location(To)",
      placeholder: "Search Here",
    },
  ];
  return (
    <View>
      <ScrollView>
        <List>
          <PageHeader text="Phase To Phase Transfer" />
          {stockFormOptions.map(
            (
              item: { label: string; placeholder: string; icon?: string },
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
        <Text className="text-center text-gray-400 text-base">Stock</Text>

        <StoreValidations />
      </ScrollView>
    </View>
  );
};

export default PhasetoPhase;
