import React from "react";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { HomeScreen } from "./screens/home";

export const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loader() {
      try {
        await Font.loadAsync({
          antfill: require("@ant-design/icons-react-native/fonts/antfill.ttf"),
          antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
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
    <>
      <HomeScreen />
    </>
  );
};

export default App;
