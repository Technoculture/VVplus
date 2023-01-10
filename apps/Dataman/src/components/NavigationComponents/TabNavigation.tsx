import * as React from "react";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../../screens/account";
import { SettingsScreen } from "../../screens/settings";
import { NotificationScreen } from "../../screens/notifications";
import NativeHomeStack from "./NativeHomeStack";

const Tab = createBottomTabNavigator<TabNavigation>();
const AccountStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

export type TabNavigation = {
  HomeTab: undefined;
  Notification: undefined;
  AccountTab: undefined;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeTab") {
            return <SimpleLineIcons name="user" size={20} color="#969696" />;
          } else if (route.name === "Notification") {
            return (
              <Octicons name="list-unordered" size={20} color={"#969696"} />
            );
          } else if (route.name === "AccountTab") {
            return (
              <MaterialCommunityIcons
                name="truck-outline"
                size={20}
                color="#969696"
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "blue",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          title: "Home",
        }}
      >
        {() => <NativeHomeStack />}
      </Tab.Screen>

      <Tab.Screen name="Notification">
        {() => (
          <NotificationStack.Navigator>
            <NotificationStack.Screen
              name="Notifications"
              component={NotificationScreen}
            />
          </NotificationStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="AccountTab" options={{ title: "Account" }}>
        {() => (
          <AccountStack.Navigator>
            <AccountStack.Screen name="Accounts" component={AccountScreen} />
            <AccountStack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ title: "Back" }}
            />
          </AccountStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
