import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/Home";
export const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
