import React from "react";
import { List, Tabs } from "@ant-design/react-native";
import { useForm, Controller } from "react-hook-form";
import { View, Text, ScrollView } from "react-native";
import { FormButton } from "../components/Button";
import { InputField } from "../components/InputField";
import {
  RECEIVE_LIST,
  DEPOSIT_LIST,
  TABS,
  CLEARED_LIST,
} from "../components/listComponents/ChequeList";
import { PageHeader } from "../components/PageHeader";
import { PHONE_REGEX } from "../Utils/Validator";

const Cheque = () => {
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
      <PageHeader text="Cheque Entry/Update" />
      <View className="h-full">
        <Tabs tabs={TABS} tabBarActiveTextColor="#1677FF">
          <View>
            <List>
              {RECEIVE_LIST.map((item, index) => (
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
                <Text>Drawn Bank</Text>
              </List.Item>
            </List>
            <FormButton />
          </View>

          <View className="h-4/5">
            <ScrollView>
              <List>
                {DEPOSIT_LIST.map((item, index) => (
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
                    Bank:
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
                    name="Bank"
                  />
                </List.Item>

                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Name of Customer:
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
                    name="Name of the Customer"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cheque Date:
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
                    name="Cheque Date"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Amount:
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
                    name="Amount"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Site:
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
                    name="Site"
                  />
                </List.Item>
              </List>

              <View className="flex flex-col mb-10">
                <FormButton onPress={handleSubmit(onSubmit)} />
              </View>
            </ScrollView>
          </View>

          <View className="h-4/5">
            <ScrollView>
              <List>
                {CLEARED_LIST.map((item, index) => (
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
                    Name of Customer:
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
                    name="Name of the Customer"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cheque Date:
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
                    name="Cheque Date"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Amount:
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
                    name="Amount"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Site:
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
                    name="Site"
                  />
                </List.Item>
                <List.Item>
                  <Text className="text-zinc-800 text-base font-normal">
                    Cleared Date
                  </Text>
                  <Text className="text-zinc-800 text-lg font-normal">
                    Enter Date
                  </Text>
                </List.Item>
              </List>
              <View className="flex flex-col mb-10">
                <FormButton onPress={handleSubmit(onSubmit)} />
              </View>
            </ScrollView>
          </View>
        </Tabs>
      </View>
    </View>
  );
};
export default Cheque;
