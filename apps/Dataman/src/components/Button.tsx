import { Button, View } from "@ant-design/react-native";

export const FormButton = () => {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Button
        type="primary"
        style={{ width: "30%", height: 40, borderRadius: 48 }}
      >
        Submit
      </Button>
    </View>
  );
};
