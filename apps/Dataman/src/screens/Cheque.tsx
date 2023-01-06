import React from "react";
import { List, Tabs } from "@ant-design/react-native";
import { View, Text, ScrollView } from "react-native";
import { NavBar } from "../components/NavBar";
import { FormButton } from "../components/Button";
import { InputField } from "../components/InputField";
import {
  RECEIVE_LIST,
  DEPOSIT_LIST,
  CLEARED_LIST,
} from "../components/listComponents/ChequeList";
import { PageHeader } from "../components/PageHeader";

const Cheque = () => {
  const TABS = [
    { title: "Receive" },
    { title: "Deposit" },
    { title: "Cleared" },
  ];

  return (
    <View>
      <NavBar />
      <PageHeader text="Cheque Entry/Update" />

      <View className="h-full">
        <Tabs tabs={TABS} tabBarActiveTextColor="#1677FF">
          <View>
            <List>
              {RECEIVE_LIST.map((item, index) => (
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
            <List>
              <List.Item>
                <Text>Drawn Bank</Text>
              </List.Item>
            </List>
            <FormButton />
          </View>

          <View className="h-3/5">
            <ScrollView>
              <List>
                {DEPOSIT_LIST.map((item, index) => (
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

              <List>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Bank:
                  </Text>
                  <InputField />
                </List.Item>

                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Name of Customer:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cheque Date:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Amount:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Site:
                  </Text>
                  <InputField />
                </List.Item>
              </List>
              <FormButton />
            </ScrollView>
          </View>

          <View className="h-3/5">
            <ScrollView>
              <List>
                {CLEARED_LIST.map((item, index) => (
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
              <List>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Name of Customer:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cheque Date:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Amount:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Site:
                  </Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cleared Date
                  </Text>
                  <Text className="text-zinc-800 text-lg font-normal">
                    Enter Date
                  </Text>
                </List.Item>
              </List>

              <FormButton />
            </ScrollView>
          </View>
        </Tabs>
      </View>
    </View>
  );
};
export default Cheque;
