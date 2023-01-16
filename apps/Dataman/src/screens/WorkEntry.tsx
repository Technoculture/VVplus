import React from "react";
import { List } from "@ant-design/react-native";
import { ScrollView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ENTRY_LIST } from "../components/listComponents/EntryList";

const WorkEntry = () => {
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
      <PageHeader text="Extra Work Entry" />
      <ScrollView>
        <List>
          <List.Item arrow="horizontal">
            <List.Item.Brief>
              <Text className="text-zinc-800 text-base font-normal">
                Voucher Type
              </Text>
              <AntDesign name="questioncircleo" />
            </List.Item.Brief>
            <Text className="text-zinc-800 text-lg font-normal">
              Search Here
            </Text>
          </List.Item>
        </List>
        <List>
          {ENTRY_LIST.map((item, index) => (
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
              Base Amount
            </Text>
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
              name="Base Amount"
            />
          </List.Item>

          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Tax</Text>
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
              name="Tax"
            />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">
              Net Amount
            </Text>
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
              name="Net Amount"
            />
          </List.Item>
          <List.Item>
            <Text className="text-zinc-800 text-base font-normal">Remarks</Text>
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
          </List.Item>
          <List.Item>
            <FormButton onPress={handleSubmit(onSubmit)} />
          </List.Item>
        </List>
      </ScrollView>
    </View>
  );
};

export default WorkEntry;
