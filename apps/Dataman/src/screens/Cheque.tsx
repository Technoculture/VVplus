import React from "react";
import { View, Text, List, Tabs } from "@ant-design/react-native";
import { Navbar } from "../components/Navbar";
import { FormButton } from "../components/Button";
import { StyleSheet, ScrollView } from "react-native";
import { InputField } from "../components/InputField";
import {
  RECEIVE_LIST,
  DEPOSIT_LIST,
  CLEARED_LIST,
} from "../components/ChequeList";
import { PageHeader } from "../components/PageHeader";

const Cheque = () => {
  const TABS = [
    { title: "Receive" },
    { title: "Deposit" },
    { title: "Cleared" },
  ];

  return (
    <View>
      <Navbar />
      <PageHeader text="Cheque Entry/Update" />

      <View style={{ height: "100%" }}>
        <Tabs tabs={TABS} tabBarActiveTextColor="#1677FF">
          <View>
            <List>
              {RECEIVE_LIST.map((item, index) => (
                <List.Item key={index} arrow="horizontal">
                  <Text style={styles.list_text}>{item.title}</Text>
                  <Text style={styles.text}>{item.content}</Text>
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

          <View style={{ height: "70%" }}>
            <ScrollView>
              <List>
                {DEPOSIT_LIST.map((item, index) => (
                  <List.Item key={index} arrow="horizontal">
                    <Text style={styles.list_text}>{item.title}</Text>
                    <Text style={styles.text}>{item.content}</Text>
                  </List.Item>
                ))}
              </List>

              <List>
                <List.Item>
                  <Text style={styles.list_text}>Bank:</Text>
                  <InputField />
                </List.Item>

                <List.Item>
                  <Text style={styles.list_text}>Name of Customer:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Cheque Date:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Amount:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Site:</Text>
                  <InputField />
                </List.Item>
              </List>
              <FormButton />
            </ScrollView>
          </View>

          <View style={{ height: "70%" }}>
            <ScrollView>
              <List>
                {CLEARED_LIST.map((item, index) => (
                  <List.Item key={index} arrow="horizontal">
                    <Text style={styles.list_text}>{item.title}</Text>
                    <Text style={styles.text}>{item.content}</Text>
                  </List.Item>
                ))}
              </List>
              <List>
                <List.Item>
                  <Text style={styles.list_text}>Name of Customer:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Cheque Date:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Amount:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Site:</Text>
                  <InputField />
                </List.Item>
                <List.Item>
                  <Text style={styles.list_text}>Cleared Date</Text>
                  <Text style={styles.text}>Enter Date</Text>
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
const styles = StyleSheet.create({
  list_text: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "400",
  },
  text: {
    color: "#333333",
    fontSize: 17,
    fontWeight: "400",
  },
});
