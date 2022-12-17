import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsScreen } from "./screens/settings";

export const App = () => {
  return (
    <SafeAreaView>
      <SettingsScreen />
    </SafeAreaView>
  );
};

export default App;
