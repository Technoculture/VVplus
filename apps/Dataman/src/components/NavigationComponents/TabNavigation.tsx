import * as React from "react";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/home";
import Purchase from "../../screens/Purchase";
import { StoreScreen } from "../../screens/store";
import SalesScreens from "../../screens/SalesScreen";
import ContractorApprovalScreen from "../../screens/ContractorApproval";
import { ContractorScreen } from "../../screens/contractors";
import { AccountScreen } from "../../screens/account";
import { SettingsScreen } from "../../screens/settings";
import { NotificationScreen } from "../../screens/notifications";

const Tab = createBottomTabNavigator<TabNavigation>();
const AccountStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

export type TabNavigation = {
  HomeTab: undefined;
  Notification: undefined;
  AccountTab: undefined;
};

export default function TabNavigation() {
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
      <Tab.Screen name="HomeTab" options={{ title: "Home" }}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />

            <HomeStack.Screen
              name="Purchase"
              component={Purchase}
              options={{ title: "Back" }}
            />
            <HomeStack.Screen
              name="StoreScreen"
              component={StoreScreen}
              options={{ title: "Back" }}
            />
            <HomeStack.Screen
              name="SalesScreens"
              component={SalesScreens}
              options={{ title: "Back" }}
            />
            <HomeStack.Screen
              name="ContractorScreen"
              component={ContractorScreen}
              options={{ title: "Back" }}
            />
            <HomeStack.Screen
              name="ContractorApprovalScreen"
              component={ContractorApprovalScreen}
              options={{ title: "Back" }}
            />
          </HomeStack.Navigator>
        )}
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
              name="SettingsScreen"
              component={SettingsScreen}
              options={{ title: "Back" }}
            />
          </AccountStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
