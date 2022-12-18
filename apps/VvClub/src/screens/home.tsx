import * as React from "react";
import { View, Text,SafeAreaView} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="mt-20">
        <Text className="text-sky-500 dark:text-sky-400 m-30"> VVclub app</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
