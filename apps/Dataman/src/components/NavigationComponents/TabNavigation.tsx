import * as React from "react";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../../screens/account";
import { SettingsScreen } from "../../screens/settings";
import { NotificationScreen } from "../../screens/notifications";
import NativeHomeStack from "./NativeHomeStack";
import { AttendanceScreen } from "../../screens/attendance";
import MyContacts from "../../screens/MyContacts";
import ProfileScreen from "../../screens/Profile";

const Tab = createBottomTabNavigator<TabNavigation>();
const AccountStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const CallStack = createNativeStackNavigator();

export type TabNavigation = {
  HomeTab: undefined;
  Notification: undefined;
  AccountTab: undefined;
  callTab: undefined;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
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
          } else if (route.name === "callTab") {
            return <Feather name="phone-call" size={24} color="#969696" />;
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "blue",
        tabBarHideOnKeyboard: true,
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
            <AccountStack.Screen
              name="attendance"
              component={AttendanceScreen}
              options={{ title: "Back" }}
            />
          </AccountStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="callTab" options={{ title: "Call" }}>
        {() => (
          <CallStack.Navigator>
            <CallStack.Screen name="Contacts" component={MyContacts} />
            <CallStack.Screen
              name="MyContacts"
              component={MyContacts}
              options={{ title: "Back" }}
            />
            <CallStack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: "",
                // headerShown: false,
              }}
            />
          </CallStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
