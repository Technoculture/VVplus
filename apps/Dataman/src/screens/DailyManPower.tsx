import React from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { List } from "@ant-design/react-native";
import { PageHeader } from "../components/PageHeader";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";

export const DailyManPowerScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data: any) => {
    console.log(data, "submitted");
  };

  const DAILY_MANPOWER_LIST = [
    {
      title: "Date",
      content: "Enter Date",
    },
    {
      title: "Party Name",
      content: "Search Here",
    },
    {
      title: "Phase(Cost Center)",
      content: "Search Here",
    },
    {
      title: "Resource Type",
      content: "Search Here",
    },
  ];
  return (
    <View>
      <PageHeader text="Daily Manpower" />
      <List>
        {DAILY_MANPOWER_LIST.map((item, idx) => (
          <List.Item key={idx} arrow="horizontal">
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
          <Text>Quantity</Text>

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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
            name="Quantity"
          />
        </List.Item>
        <List.Item>
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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

      <View className="flex-col justify-center items-center mb-24 mt-4">
        <FormButton onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default DailyManPowerScreen;
