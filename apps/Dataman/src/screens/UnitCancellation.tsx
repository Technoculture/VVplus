import React from "react";
import { List } from "@ant-design/react-native";
import { View, Text, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PageHeader } from "../components/PageHeader";
import { FormButton } from "../components/Button";
import { UNIT_LIST } from "../components/listComponents/UnitList";
import { InputField } from "../components/InputField";
import { PHONE_REGEX } from "../Utils/Validator";

export const UnitCancellation = () => {
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
    <View className="h-full">
      <View>
        <PageHeader text="Unit Cancellation" />
      </View>
      <ScrollView>
        <List>
          {UNIT_LIST.map((item, index) => (
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
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">
              Base Amount (Deduction Amount)
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
              name="Base Amount"
            />
          </List.Item>

          <List.Item arrow="horizontal">
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
            <Text className="text-zinc-800 text-lg font-normal">
              Search Here
            </Text>
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
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
              name="Tax"
            />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Remarks</Text>
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
          </List.Item>
        </List>
        <FormButton onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  );
};
