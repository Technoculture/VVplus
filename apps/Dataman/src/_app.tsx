import { View } from "@ant-design/react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./components/NavigationComponents/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

export const App = () => {
  // const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;
