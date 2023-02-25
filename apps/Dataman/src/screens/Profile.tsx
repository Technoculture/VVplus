import React, { useState } from "react";
import axios from "axios";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import makeCall from "../components/API/CallApi";
import { getColorsByLetter } from "../Utils/colors";
import { EXOTEL_AUTHORIZATION, EXOTEL_SID } from "@env";

const ProfileScreen = ({ route, navigation }: any) => {
  const [callText, setCallText] = useState("call");
  const { name, phone } = route.params.contactInfo;
  const colors = getColorsByLetter(name[0]);

  const handleCall = async () => {
    const config = {
      headers: {
        Authorization: `Basic ${EXOTEL_AUTHORIZATION}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await makeCall(); // Make POST request to make the call
      const callSid = response.Sid; // Get the callSid from the POST response

      let status = "";
      while (status !== "completed") {
        const responseOfCall = await axios.get(
          `https://api.exotel.com/v1/Accounts/${EXOTEL_SID}/Calls/${callSid}.json`,
          config
        );
        status = responseOfCall.data.Call.Status;

        console.log(status);
        switch (status) {
          case "queued":
            setCallText("queued");
            break;
          case "in-progress":
            setCallText("in-progress");
            break;
          case "completed":
            setCallText("completed");
            break;
          case "failed":
            setCallText("failed");
            break;
          case "busy":
            setCallText("busy");
            break;
          case "no-answer":
            setCallText("no-answer");
            break;
          default:
            setCallText("Call");
            break;
        }
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCallViewClick = () => {
    handleCall();
  };

  return (
    <View>
      <View className="relative">
        <Image
          source={require("../../assets/profile.png")}
          className="w-40 h-60 mx-auto"
        />

        <View
          className={`absolute top-0 left-0 right-0 bottom-0 opacity-50 flex items-center justify-center`}
          style={{ backgroundColor: colors }}
        />
        <Text
          className={`absolute bottom-0 left-5 text-base text-white font-bold text-3xl`}
        >
          {name}
        </Text>
      </View>

      <View className="flex flex-column p-5 bg-white shadow-xl">
        <View className="flex flex-row justify-around">
          <TouchableOpacity onPress={handleCallViewClick}>
            <MaterialIcons
              name="call"
              size={28}
              color="blue"
              onPress={handleCall}
            />
          </TouchableOpacity>

          <MaterialCommunityIcons name="comment-text" size={24} color="blue" />
          <Feather name="video" size={24} color="gray" />
        </View>
        <View className="flex flex-row justify-around mt-2">
          <Text>{callText}</Text>
          <Text>Text</Text>
          <Text className="text-gray-400">Video</Text>
        </View>
      </View>

      <View className="flex flex-column bg-white shadow-xl p-5">
        <View className="flex flex-row justify-between mb-2">
          <View className="flex flex-row">
            <MaterialIcons name="call" size={28} color="gray" />
            <View className="ml-5">
              <Text className="text-base">{phone}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
