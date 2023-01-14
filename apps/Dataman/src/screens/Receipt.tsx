import React from "react";
import { List } from "@ant-design/react-native";
import { ScrollView, View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { InputField } from "../components/InputField";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { RECEIPT_LIST } from "../components/listComponents/ReceiptList";

const Receipt = () => {
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
    <ScrollView>
      <View className="h-full">
        <PageHeader text="Goods Receipt Entry" />

        <List>
          {RECEIPT_LIST.map((item, index) => (
            <List.Item key={index} arrow="horizontal">
              <Text className="text-zinc-800 text-base font-normal">
                {item.title}
              </Text>
              <Text className="text-zinc-800 text-lg font-normal">
                {item.content}
              </Text>
            </List.Item>
          ))}
        </List>

        <List>
          <Item>
            <Text>Total Bill Value</Text>
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
                      placeholder={" "}
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
              name="total Bill Value"
            />
          </Item>
          <Item>
            <Text>Remarks</Text>
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
                      placeholder={" "}
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
          </Item>
        </List>
        <View>
          <FormButton onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Receipt;
