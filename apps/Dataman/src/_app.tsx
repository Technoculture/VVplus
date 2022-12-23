import * as React from "react";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoreScreen } from "./screens/store";
import StockReceive from "./screens/stockRecieve";
import StockIssue from "./screens/stockIssue";
import PhasetoPhase from "./screens/phaseToPhase";

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
      {/* <StoreScreen /> */}
      {/* <StockReceive /> */}
      {/* <StockIssue /> */}
      <PhasetoPhase />
    </SafeAreaView>
  );
};

export default App;
