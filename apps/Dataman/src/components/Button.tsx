import { Button } from "@ant-design/react-native";
import { View } from "react-native";

export const FormButton = () => {
  return (
    <View className="flex flex-col items-center mt-10">
      <Button type="primary">Submit</Button>
    </View>
  );
};
