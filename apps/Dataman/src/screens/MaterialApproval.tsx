import React from "react";
import { Button, WhiteSpace, List } from "@ant-design/react-native";
import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { PHONE_REGEX } from "../Utils/Validator";

const MaterialApproval = () => {
  const Item = List.Item;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data: any) => {
    console.log(data, "submitted");
  };

  return (
    <View>
      <PageHeader text="Material Request Approval" />
      <List>
        <Item arrow="horizontal">
          <Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Indent Date
            </Text>
            <AntDesign name="questioncircleo" color="black" />
          </Item.Brief>
          <Text className="text-zinc-800 text-lg font-normal">Enter Date</Text>
        </Item>

        <Item>
          <Text className="text-zinc-800 text-base font-normal">
            Indent Number
          </Text>
          <Controller
            control={control}
            rules={{
              required: "This field is required",
              pattern: {
                value: PHONE_REGEX,
                message: "Enter valid Number",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <View
                  className={`border rounded bg-white ${
                    error ? `border-red-600` : `border-white`
                  }`}
                >
                  <InputField
                    placeholder={"Enter Number"}
                    onChangeText={onChange}
                    value={value}
                    maxLength={10}
                  />
                </View>
                {error && (
                  <Text className="text-red-600 self-stretch text-center">
                    {error.message}
                  </Text>
                )}
              </>
            )}
            name="Indent Number"
          />
        </Item>
      </List>

      <View className="flex flex-col items-center justify-center gap-1 mt-10">
        <FormButton onPress={handleSubmit(onSubmit)} />

        <WhiteSpace size="lg" />
        <Button type="warning" style={{ borderRadius: 25, width: 90 }}>
          Deny
        </Button>
      </View>
    </View>
  );
};

export default MaterialApproval;
