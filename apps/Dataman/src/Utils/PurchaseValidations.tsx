import React from "react";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { List, Button } from "@ant-design/react-native";

export const PurchaseValidations = () => {
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
      <List>
        <Item arrow="horizontal">
          <Item.Brief>
            <Text className="text-zinc-800 text-base font-normal">Item</Text>
            <AntDesign name="questioncircleo" />
          </Item.Brief>
          <Text className="text-zinc-800 text-lg font-normal">Search Here</Text>
        </Item>
        <Item>
          <View className="flex flex-row justify-between">
            <View className="w-2/4">
              <Text>Request Quantity</Text>
              <Controller
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/,
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
            <View className="w-2/5 pl-2">
              <Text>Unit</Text>
              <Controller
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/,
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
                        placeholder={"Tonnes"}
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
                name="Units"
              />
            </View>
          </View>
        </Item>

        <Item>
          <Text className="text-base font-bold text-zinc-800">
            Current Stock:
          </Text>
          <View className="flex flex-row justify-between">
            <Text className=" text-blue-600 text-base font-bold ">
              Clear Item
            </Text>
            <Button
              type="primary"
              style={{ width: 170, height: 30, borderRadius: 25 }}
            >
              Add Item to List
            </Button>
          </View>
        </Item>

        <Item arrow="horizontal">
          <Item.Brief>
            <Text className="text-zinc-800 text-base font-normal">
              Request Date
            </Text>
            <AntDesign name="questioncircleo" />
          </Item.Brief>
          <Text className="text-zinc-800 text-lg font-normal">Enter Date</Text>
        </Item>
      </List>
      <View>
        <FormButton onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
