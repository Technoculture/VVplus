import { Button } from "@ant-design/react-native";
import { View } from "react-native";

export const FormButton = () => {
  return (
    <View className="flex-col justify-center items-center mt-10">
      <Button type="primary" style={{ borderRadius: 25 }}>
        Submit
      </Button>
    </View>
  );
};
