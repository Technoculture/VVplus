import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import TabNavigation from "./components/NavigationComponents/TabNavigation";
import { LoginScreen } from "./screens/LoginScreen";

export const App = () => {
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
      <View className="h-full">
        {/* <NavigationContainer>
          <TabNavigation />
        </NavigationContainer> */}
        <LoginScreen />
        {/* <Form /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
