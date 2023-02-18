import { Button } from "@ant-design/react-native";
import { View } from "react-native";

export interface ButtonProps {
  onPress?: () => void;
}

export const FormButton = ({ onPress }: ButtonProps) => {
  return (
    <View className="flex-col justify-center items-center mt-10">
      <Button type="primary" style={{ borderRadius: 25 }} onPress={onPress}>
        Submit
      </Button>
    </View>
  );
};
