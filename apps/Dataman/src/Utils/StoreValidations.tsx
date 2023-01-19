import React from "react";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { List, Button } from "@ant-design/react-native";
import { PHONE_REGEX } from "./Validator";

export const StoreValidations = () => {
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
      <List>
        <List.Item arrow="horizontal">
          <List.Item.Brief>
            <Text>Item </Text>
            <AntDesign name="questioncircleo" />
          </List.Item.Brief>
          <Text className="text-base">Search Here</Text>
        </List.Item>
        <List.Item>
          <View className="flex-row justify-between my-1">
            <View className="flex-[1]">
              <Text className="text-base">Request Quantity</Text>

              <Controller
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value: PHONE_REGEX,
                    message: "Enter valid Number",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
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
                name="Request Quantity"
              />
            </View>
            <View className="flex-[1] pl-5">
              <Text className="text-base">Rate</Text>

              <Controller
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value: PHONE_REGEX,
                    message: "Enter valid Number",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <View
                      className={`border rounded bg-white ${
                        error ? `border-red-600` : `border-white`
                      }`}
                    >
                      <InputField
                        placeholder={"100.00"}
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
                name="Rate"
              />
            </View>
          </View>
        </List.Item>
        <List.Item>
          <Text className="text-base font-bold my-1">Current Stock:</Text>
          <View className="flex-row justify-between my-1">
            <Text className="text-base font-bold text-blue-500">
              Clear Item
            </Text>
            <Button type="primary" style={{ borderRadius: 25, height: 30 }}>
              <Text style={{ color: "white", paddingHorizontal: 15 }}>
                Add Item to List
              </Text>
            </Button>
          </View>
        </List.Item>
        <List.Item>
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
                    placeholder={"Remarks"}
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
            name="Remarks"
          />
        </List.Item>
      </List>
      <Text className="p-2 text-base font-bold text-blue-500">
        Total Amount :0.00
      </Text>
      <View className="flex-col justify-center items-center mb-24">
        <FormButton onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
