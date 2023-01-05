import { View, TabBar } from "@ant-design/react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
import { NotificationScreen } from "./screens/notifications";
import { AccountScreen } from "./screens/account";

import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import * as Font from "expo-font";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const changeTab = (tabName: string) => {
    setSelectedTab(tabName);
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loader() {
      try {
        await Font.loadAsync({
          antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
          antfill: require("@ant-design/icons-react-native/fonts/antfill.ttf"),
        });
      } catch (error) {
        console.log("error loading fonts", error);
      } finally {
        setFontsLoaded(true);
      }
    }
    loader();
  }, []);
  if (fontsLoaded === false) return null;
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <TabBar
          unselectedTintColor="#999999"
          tintColor="#0000FF"
          barTintColor="#f5f5f5"
        >
          <TabBar.Item
            icon={<SimpleLineIcons name="user" size={20} />}
            selectedIcon={
              <SimpleLineIcons name="user" size={20} color="#0000ff" />
            }
            selected={selectedTab === "Home"}
            onPress={() => changeTab("Home")}
          >
            <HomeScreen />
          </TabBar.Item>
          <TabBar.Item
            icon={<MaterialCommunityIcons name="truck-outline" size={20} />}
            selectedIcon={
              <MaterialCommunityIcons
                name="truck-outline"
                size={20}
                color="#0000ff"
              />
            }
            selected={selectedTab === "Notifications"}
            onPress={() => changeTab("Notifications")}
          >
            <NotificationScreen />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Octicons name="list-unordered" size={20} color={"#969696"} />
            }
            selectedIcon={
              <Octicons name="list-unordered" size={20} color={"#0000FF"} />
            }
            selected={selectedTab === "Accounts"}
            onPress={() => changeTab("Accounts")}
          >
            <AccountScreen />
          </TabBar.Item>
        </TabBar>
      </View>
    </SafeAreaView>
  );
};

export default App;
