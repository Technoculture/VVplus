import * as React from "react";
import { HomeScreen } from "./screens/home";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { AttendanceScreen } from "./screens/attendance";

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  React.useEffect(() => {
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
      <AttendanceScreen />
    </SafeAreaView>
  );
};

export default App;
