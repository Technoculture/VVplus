import { View, TabBar } from "@ant-design/react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
import { NotificationScreen } from "./screens/notifications";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const changeTab = (tabName: string) => {
    setSelectedTab(tabName);
  };
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
            selected={selectedTab === "Home"}
            onPress={() => changeTab("Home")}
          >
            <HomeScreen />
          </TabBar.Item>
          <TabBar.Item
            icon={<MaterialCommunityIcons name="truck-outline" size={20} />}
            selected={selectedTab === "Notifications"}
            onPress={() => changeTab("Notifications")}
          >
            <NotificationScreen />
          </TabBar.Item>
        </TabBar>
      </View>
    </SafeAreaView>
  );
};

export default App;
