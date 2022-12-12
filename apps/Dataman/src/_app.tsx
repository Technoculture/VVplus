import { Provider } from "@ant-design/react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
import customTheme from "./theme/customTheme";

export const App = () => {
  return (
    <Provider theme={customTheme}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
